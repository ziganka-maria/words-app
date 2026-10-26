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
// data-lib.js (помощник addDecks) — первым, core.js — последним; остальные в любом порядке
const order = f => (f === 'data-lib.js' ? 0 : f === 'core.js' ? 3 : /^texts-en[0-9]/.test(f) ? 2 : f.startsWith('texts') ? 1.5 : 1);
for (const f of fs.readdirSync(APP).filter(f => /^(data|grammar|texts)-.*\.js$/.test(f)).concat('core.js').sort((a, b) => order(a) - order(b)))
  vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8'), ctx, { filename: f });
const W = ctx.W; W.prepare();

const texts = new Set();
for (const d of W.allDecks('en')) for (const c of d.cards) { texts.add(W.speechText(c.w)); if (c.ex) texts.add(W.speechText(c.ex)); }
for (const l of (ctx.GRAMMAR || {}).en || []) for (const b of l.blocks) if (b.t === 'ex') for (const r of b.rows) texts.add(W.speechText(r[0]));
for (const t of W.audioExtra ? W.audioExtra('en') : []) texts.add(W.speechText(t));
for (const t of (ctx.TEXTS || {}).en || []) for (const s of t.p.flat()) texts.add(W.speechText(s[0]));
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
  const todo = [...texts].filter(t => !fs.existsSync(path.join(outDir, W.audioKey(t) + '.mp3')));
  console.log(dir, ': всего', texts.size, ', озвучить', todo.length);
  for (let i = 0; i < todo.length; i += 200) {
    const part = todo.slice(i, i + 200);
    const input = part.map(t => JSON.stringify({ text: t, output_file: path.join(tmp, W.audioKey(t) + '.wav') })).join('\n') + '\n';
    const r = spawnSync(path.join(PIPER, 'piper', 'piper.exe'), ['-m', path.join(PIPER, model + '.onnx'), '--json-input', '--sentence_silence', '0.1'], { input, maxBuffer: 1 << 26 });
    if (r.status !== 0) { console.log('piper error', r.stderr.toString().slice(-500)); process.exit(1); }
    for (const t of part) {
      const wavFile = path.join(tmp, W.audioKey(t) + '.wav');
      if (!fs.existsSync(wavFile)) { console.log('нет файла для:', t); continue; }
      fs.writeFileSync(path.join(outDir, W.audioKey(t) + '.mp3'), toMp3(fs.readFileSync(wavFile)));
      fs.unlinkSync(wavFile);
    }
    console.log('  готово', Math.min(i + 200, todo.length), '/', todo.length);
  }
  const size = fs.readdirSync(outDir).reduce((s, f) => s + fs.statSync(path.join(outDir, f)).size, 0);
  if (PRUNE) {
    const keep = new Set([...texts].map(t => W.audioKey(t) + '.mp3'));
    const old = fs.readdirSync(outDir).filter(f => !keep.has(f));
    old.forEach(f => fs.unlinkSync(path.join(outDir, f)));
    console.log(dir, ': удалено устаревших', old.length);
  }
  console.log(dir, ': файлов', fs.readdirSync(outDir).length, ',', (size / 1024 / 1024).toFixed(1), 'МБ');
}
