// Озвучка слов и примеров нейросетевыми голосами Piper → audio/<голос>/<ключ>.mp3
// Запуск: node tools/build-audio.js <папка с piper> <папка с lamejs>
// Озвучивает только то, чего ещё нет, поэтому после добавления слов просто запускается снова.
const fs = require('fs'), path = require('path'), vm = require('vm'), { spawnSync } = require('child_process');

const APP = path.join(__dirname, '..');
// --prune — удалить записи текстов, которых больше нет в словаре (после правок примеров)
const PRUNE = process.argv.includes('--prune');
const [PIPER = 'C:/Users/Public/wordstest/piper', LAME = 'C:/Users/Public/wordstest/tools/node_modules/lamejs'] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const VOICES = { 'en-us': 'en_US-lessac-high', 'en-gb': 'en_GB-cori-high' };

// грузим контент и ядро так же, как браузер
const ctx = { console, addEventListener() {}, localStorage: { getItem: () => null, setItem() {} } };
ctx.window = ctx; vm.createContext(ctx);
// только то, что подключено в index.html, и в том же порядке (неподключённые черновики не озвучиваем)
const scripts = [...fs.readFileSync(path.join(APP, 'index.html'), 'utf8').matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
for (const f of scripts.filter(f => /^(data|grammar|texts|topics)-.*\.js$/.test(f)).concat('core.js'))
  vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8'), ctx, { filename: f });
const W = ctx.W; W.prepare();

const texts = new Set();
for (const d of W.allDecks('en')) for (const c of d.cards) { texts.add(W.speechText(c.w)); if (c.ex) texts.add(W.speechText(c.ex)); }
for (const l of (ctx.GRAMMAR || {}).en || []) for (const b of l.blocks) if (b.t === 'ex') for (const r of b.rows) texts.add(W.speechText(r[0]));
for (const t of W.audioExtra ? W.audioExtra('en') : []) texts.add(W.speechText(t));
for (const t of (ctx.TEXTS || {}).en || []) for (const s of t.p.flat()) texts.add(W.speechText(s[0]));
// образцы топиков
for (const t of (ctx.TOPICS || {}).en || []) for (const m of t.model) texts.add(W.speechText(m[0]));
// три формы неправильных глаголов для тренажёра
for (const v of W.irregulars('en')) texts.add(W.speechText(W.irregularPhrase(v)));
texts.delete('');

const lctx = {}; vm.createContext(lctx);
vm.runInContext(fs.readFileSync(path.join(LAME, 'lame.all.js'), 'utf8'), lctx);
const toMp3 = wav => {
  let p = 12, data = null, rate = 22050;
  while (p < wav.length - 8) {
    const id = wav.toString('ascii', p, p + 4), size = wav.readUInt32LE(p + 4);
    if (id === 'fmt ') rate = wav.readUInt32LE(p + 12);
    if (id === 'data') { data = wav.subarray(p + 8, p + 8 + size); break; }
    p += 8 + size;
  }
  const pcm = new Int16Array(data.buffer.slice(data.byteOffset, data.byteOffset + data.length));
  const enc = new lctx.lamejs.Mp3Encoder(1, rate, 40), out = [];
  for (let i = 0; i < pcm.length; i += 1152) { const b = enc.encodeBuffer(pcm.subarray(i, i + 1152)); if (b.length) out.push(Buffer.from(b)); }
  out.push(Buffer.from(enc.flush()));
  return Buffer.concat(out);
};

const tmp = path.join(PIPER, 'tmp-wav');
fs.mkdirSync(tmp, { recursive: true });
for (const [dir, model] of Object.entries(VOICES)) {
  const outDir = path.join(APP, 'audio', dir);
  fs.mkdirSync(outDir, { recursive: true });
  // короткие и длинные озвучиваются разными настройками, поэтому порции не смешиваем
  const todo = [...texts].filter(t => !fs.existsSync(path.join(outDir, W.audioFile(t) + '.mp3'))).sort((a, b) => W.audioCalm(b) - W.audioCalm(a));
  const cut = todo.filter(W.audioCalm).length;
  console.log(dir, ': всего', texts.size, ', озвучить', todo.length);
  for (let i = 0; i < todo.length;) {
    const part = todo.slice(i, i < cut ? Math.min(i + 200, cut) : i + 200);
    i += part.length;
    const input = part.map(t => JSON.stringify({ text: t, output_file: path.join(tmp, W.audioFile(t) + '.wav') })).join('\n') + '\n';
    const r = spawnSync(path.join(PIPER, 'piper', 'piper.exe'), ['-m', path.join(PIPER, model + '.onnx'), '--json-input', '--sentence_silence', '0.1'].concat(W.audioCalm(part[0]) ? ['--noise_scale', '0.3', '--noise_w', '0.3'] : []), { input, maxBuffer: 1 << 26 });
    if (r.status !== 0) { console.log('piper error', r.stderr.toString().slice(-500)); process.exit(1); }
    for (const t of part) {
      const wavFile = path.join(tmp, W.audioFile(t) + '.wav');
      if (!fs.existsSync(wavFile)) { console.log('нет файла для:', t); continue; }
      fs.writeFileSync(path.join(outDir, W.audioFile(t) + '.mp3'), toMp3(fs.readFileSync(wavFile)));
      fs.unlinkSync(wavFile);
    }
    console.log('  готово', i, '/', todo.length);
  }
  const size = fs.readdirSync(outDir).reduce((s, f) => s + fs.statSync(path.join(outDir, f)).size, 0);
  if (PRUNE) {
    const keep = new Set([...texts].map(t => W.audioFile(t) + '.mp3'));
    const old = fs.readdirSync(outDir).filter(f => !keep.has(f));
    old.forEach(f => fs.unlinkSync(path.join(outDir, f)));
    console.log(dir, ': удалено устаревших', old.length);
  }
  console.log(dir, ': файлов', fs.readdirSync(outDir).length, ',', (size / 1024 / 1024).toFixed(1), 'МБ');
}
