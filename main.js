import {
  prepare,
  layout,
  prepareWithSegments,
  layoutWithLines,
  clearCache,
  setLocale,
  profilePrepare,
} from '@chenglou/pretext';

// ─── Tab switching ───────────────────────────────────────────────────────────

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ─── Snippet toggles ─────────────────────────────────────────────────────────

document.querySelectorAll('.snippet-toggle').forEach(btn => {
  const preId = btn.id.replace('-toggle', '');
  const pre = document.getElementById(preId);
  if (!pre) return;
  btn.addEventListener('click', () => {
    const open = pre.classList.toggle('open');
    btn.classList.toggle('open', open);
  });
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtMs(ms) {
  if (ms < 0.001) return '<0.001ms';
  if (ms < 0.01) return ms.toFixed(4) + 'ms';
  return ms.toFixed(3) + 'ms';
}

function fmtPx(n) { return n.toFixed(2) + 'px'; }

function flashBtn(btn) {
  btn.classList.remove('flash');
  void btn.offsetWidth; // reflow to restart animation
  btn.classList.add('flash');
}

// ─── Tab 1: Live Playground ───────────────────────────────────────────────────

const pgText        = document.getElementById('pg-text');
const pgFontSize    = document.getElementById('pg-fontsize');
const pgFontSizeVal = document.getElementById('pg-fontsize-val');
const pgWidth       = document.getElementById('pg-width');
const pgWidthVal    = document.getElementById('pg-width-val');
const pgLh          = document.getElementById('pg-lh');
const pgLhVal       = document.getElementById('pg-lh-val');
const pgPrewrap     = document.getElementById('pg-prewrap');
const pgClearCache  = document.getElementById('pg-clear-cache');
const pgCacheStatus = document.getElementById('pg-cache-status');

const pgPredHeight   = document.getElementById('pg-pred-height');
const pgPredLines    = document.getElementById('pg-pred-lines');
const pgPredPrep     = document.getElementById('pg-pred-prep');
const pgProfAnalysis = document.getElementById('pg-prof-analysis');
const pgProfMeasure  = document.getElementById('pg-prof-measure');
const pgPredLayout   = document.getElementById('pg-pred-layout');
const pgProfSegs     = document.getElementById('pg-prof-segs');
const pgProfBreak    = document.getElementById('pg-prof-break');
const pgPredViz      = document.getElementById('pg-pred-viz');

const pgDomHeight = document.getElementById('pg-dom-height');
const pgDelta     = document.getElementById('pg-delta');
const pgDomTime   = document.getElementById('pg-dom-time');
const pgDomRender = document.getElementById('pg-dom-render');
const pgSnippet   = document.getElementById('pg-snippet');

// Hidden off-screen element for fair DOM measurement (matches font/wrapping)
const pgMeasureEl = document.createElement('div');
Object.assign(pgMeasureEl.style, {
  position: 'fixed', left: '-9999px', top: '0', visibility: 'hidden',
  overflowWrap: 'break-word', wordBreak: 'break-word',
});
document.body.appendChild(pgMeasureEl);

function updatePlayground() {
  const text = pgText.value;
  const fontSize = parseInt(pgFontSize.value, 10);
  const containerWidth = parseInt(pgWidth.value, 10);
  const lineHeightMultiplier = parseInt(pgLh.value, 10) / 10;
  const lineHeight = fontSize * lineHeightMultiplier;
  const font = `${fontSize}px Inter`;
  const whiteSpace = pgPrewrap.checked ? 'pre-wrap' : 'normal';

  pgFontSizeVal.textContent = fontSize + 'px';
  pgWidthVal.textContent = containerWidth + 'px';
  pgLhVal.textContent = lineHeightMultiplier.toFixed(1);

  // profilePrepare — detailed timing breakdown
  const profile = profilePrepare(text, font, { whiteSpace });

  // layout timing
  const handle = prepare(text, font, { whiteSpace });
  const t1 = performance.now();
  const result = layout(handle, containerWidth, lineHeight);
  const t2 = performance.now();

  pgPredHeight.textContent = fmtPx(result.height);
  pgPredLines.textContent = result.lineCount;
  pgPredPrep.textContent = fmtMs(profile.totalMs);
  pgProfAnalysis.textContent = fmtMs(profile.analysisMs);
  pgProfMeasure.textContent = fmtMs(profile.measureMs);
  pgPredLayout.textContent = fmtMs(t2 - t1);
  pgProfSegs.textContent = profile.preparedSegments;
  pgProfBreak.textContent = profile.breakableSegments;

  // Predicted height visualized
  pgPredViz.style.width = Math.min(containerWidth, 480) + 'px';
  pgPredViz.style.height = result.height + 'px';

  // DOM measurement — use off-screen element at exact same width/font/lineHeight
  pgMeasureEl.style.width = containerWidth + 'px';
  pgMeasureEl.style.fontSize = fontSize + 'px';
  pgMeasureEl.style.lineHeight = lineHeightMultiplier;
  pgMeasureEl.style.fontFamily = 'Inter, system-ui, sans-serif';
  pgMeasureEl.style.whiteSpace = pgPrewrap.checked ? 'pre-wrap' : 'normal';
  pgMeasureEl.textContent = text;

  const d0 = performance.now();
  const bcr = pgMeasureEl.getBoundingClientRect();
  const d1 = performance.now();

  // Visible render (unconstrained width, for display)
  pgDomRender.style.fontSize = fontSize + 'px';
  pgDomRender.style.lineHeight = lineHeightMultiplier;
  pgDomRender.style.fontFamily = 'Inter, system-ui, sans-serif';
  pgDomRender.style.whiteSpace = pgPrewrap.checked ? 'pre-wrap' : 'normal';
  pgDomRender.textContent = text;

  const domH = bcr.height;
  pgDomHeight.textContent = fmtPx(domH);
  pgDomTime.textContent = fmtMs(d1 - d0);

  const delta = Math.abs(result.height - domH);
  pgDelta.textContent = fmtPx(delta);
  pgDelta.className = 'metric-val ' + (delta < 2 ? 'good' : delta < 5 ? 'warn' : 'bad');

  // Live snippet
  const ws = pgPrewrap.checked ? `, { whiteSpace: 'pre-wrap' }` : '';
  pgSnippet.innerHTML =
    `<span class="cm">// profilePrepare() for detailed timing breakdown</span>\n` +
    `<span class="kw">const</span> profile = <span class="fn">profilePrepare</span>(text, <span class="str">'${font}'</span>${ws});\n` +
    `<span class="cm">// → analysisMs: ${fmtMs(profile.analysisMs)}, measureMs: ${fmtMs(profile.measureMs)}</span>\n` +
    `<span class="cm">// → preparedSegments: ${profile.preparedSegments}, breakableSegments: ${profile.breakableSegments}</span>\n\n` +
    `<span class="kw">const</span> handle = <span class="fn">prepare</span>(text, <span class="str">'${font}'</span>${ws});\n` +
    `<span class="kw">const</span> { height, lineCount } = <span class="fn">layout</span>(handle, <span class="num">${containerWidth}</span>, <span class="num">${lineHeight.toFixed(1)}</span>);\n` +
    `<span class="cm">// → height: ${fmtPx(result.height)}, lineCount: ${result.lineCount}</span>`;
}

pgText.addEventListener('input', updatePlayground);
pgFontSize.addEventListener('input', updatePlayground);
pgWidth.addEventListener('input', updatePlayground);
pgLh.addEventListener('input', updatePlayground);
pgPrewrap.addEventListener('change', updatePlayground);

pgClearCache.addEventListener('click', () => {
  clearCache();
  pgCacheStatus.textContent = 'Cache cleared ✓';
  flashBtn(pgClearCache);
  setTimeout(() => { pgCacheStatus.textContent = ''; }, 2000);
  updatePlayground(); // re-measure cold to show fresh timings
});

updatePlayground();

// ─── Tab 2: Resize Timing ─────────────────────────────────────────────────────

const RESIZE_TEXT = document.getElementById('resize-text').textContent.trim();
const RESIZE_FONT = '15px Inter';
const RESIZE_LH   = 15 * 1.6;

// prepare once — reuse across all resizes
let resizePrepared = prepare(RESIZE_TEXT, RESIZE_FONT);

// Off-screen element for fair DOM measurement
const resizeMeasureEl = document.getElementById('resize-measure-el');
resizeMeasureEl.textContent = RESIZE_TEXT;

let resizeCount = 0;
let pretextTimes = [];
let domTimes = [];

const tPretext   = document.getElementById('t-pretext');
const tDom       = document.getElementById('t-dom');
const tW         = document.getElementById('t-w');
const tPredH     = document.getElementById('t-pred-h');
const tDomH      = document.getElementById('t-dom-h');
const tDelta     = document.getElementById('t-delta');
const tCount     = document.getElementById('t-count');
const tAvgPretext = document.getElementById('t-avg-pretext');
const tAvgDom    = document.getElementById('t-avg-dom');

const ro = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { width } = entry.contentRect;
    if (width < 1) continue;

    // Pretext layout — pure arithmetic, no DOM
    const p0 = performance.now();
    const presult = layout(resizePrepared, width, RESIZE_LH);
    const p1 = performance.now();
    const pretextMs = p1 - p0;

    // DOM measurement — off-screen element at the same width (fair comparison)
    resizeMeasureEl.style.width = width + 'px';
    const d0 = performance.now();
    const bcr = resizeMeasureEl.getBoundingClientRect();
    const d1 = performance.now();
    const domMs = d1 - d0;

    pretextTimes.push(pretextMs);
    domTimes.push(domMs);
    resizeCount++;

    const domH = bcr.height;
    const delta = Math.abs(presult.height - domH);

    tPretext.textContent = fmtMs(pretextMs);
    tDom.textContent = fmtMs(domMs);
    tW.textContent = Math.round(width) + 'px';
    tPredH.textContent = fmtPx(presult.height);
    tDomH.textContent = fmtPx(domH);
    tDelta.textContent = fmtPx(delta);
    tCount.textContent = resizeCount;

    const avgP = pretextTimes.reduce((a, b) => a + b, 0) / pretextTimes.length;
    const avgD = domTimes.reduce((a, b) => a + b, 0) / domTimes.length;
    tAvgPretext.textContent = fmtMs(avgP);
    tAvgDom.textContent = fmtMs(avgD);
  }
});

ro.observe(document.getElementById('resize-box'));

// Snippet toggle for resize tab
document.getElementById('resize-snippet-toggle').addEventListener('click', () => {
  const pre = document.getElementById('resize-snippet');
  const open = pre.classList.toggle('open');
  document.getElementById('resize-snippet-toggle').classList.toggle('open', open);
});

// ─── Tab 3: Virtual List ──────────────────────────────────────────────────────

const WORDS = [
  'the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog',
  'typography', 'renders', 'beautiful', 'layout', 'text', 'measurement',
  'canvas', 'performance', 'browser', 'reflow', 'bidi', 'unicode',
  'segment', 'grapheme', 'pretext', 'library', 'demo', 'interactive',
  'virtual', 'scroll', 'list', 'masonry', 'height', 'predict',
  'algorithm', 'efficient', 'fast', 'modern', 'web', 'font', 'size',
  'container', 'width', 'line', 'break', 'wrap', 'CJK', 'emoji',
  'spring', '中文', '日本語', '한국어', 'Ñoño', 'café', 'über',
];

function randomSentence(minWords, maxWords) {
  const count = minWords + Math.floor(Math.random() * (maxWords - minWords));
  const words = Array.from({ length: count }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const s = words.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

const ITEM_COUNT  = 500;
const VLIST_FONT  = '14px Inter';
const VLIST_LH_MULT = 1.6;

const vlistContainer = document.getElementById('vlist-container');
const vlistSpacer    = document.getElementById('vlist-spacer');
const vlistViewport  = document.getElementById('vlist-viewport');
const vlMeasured     = document.getElementById('vl-measured');
const vlMtime        = document.getElementById('vl-mtime');
const vlVisible      = document.getElementById('vl-visible');
const fpsVal         = document.getElementById('fps-val');

let vlistItems = [], vlistOffsets = [], vlistHeights = [];
let vlistInitialized = false;

function initVirtualList() {
  if (vlistInitialized) return;
  vlistInitialized = true;

  const texts = Array.from({ length: ITEM_COUNT }, () => randomSentence(8, 60));
  vlistItems = texts;

  const containerWidth = vlistContainer.clientWidth - 40;
  const lineHeight = 14 * VLIST_LH_MULT;

  const t0 = performance.now();
  const results = texts.map(t => {
    const h = prepare(t, VLIST_FONT);
    return layout(h, containerWidth, lineHeight);
  });
  const t1 = performance.now();

  // item height = text height + 24px top/bottom padding + 20px index row
  vlistHeights = results.map(r => r.height + 44);

  vlistOffsets = new Array(ITEM_COUNT + 1);
  vlistOffsets[0] = 0;
  for (let i = 0; i < ITEM_COUNT; i++) {
    vlistOffsets[i + 1] = vlistOffsets[i] + vlistHeights[i];
  }

  vlistSpacer.style.height = vlistOffsets[ITEM_COUNT] + 'px';
  vlMeasured.textContent = ITEM_COUNT;
  vlMtime.textContent = fmtMs(t1 - t0);

  renderVirtualList();
}

function findFirstVisible(scrollTop) {
  let lo = 0, hi = ITEM_COUNT - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (vlistOffsets[mid + 1] <= scrollTop) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

function renderVirtualList() {
  const scrollTop = vlistContainer.scrollTop;
  const viewH = vlistContainer.clientHeight;

  const start = Math.max(0, findFirstVisible(scrollTop) - 2);
  let end = start;
  while (end < ITEM_COUNT && vlistOffsets[end] < scrollTop + viewH) end++;
  end = Math.min(ITEM_COUNT - 1, end + 2);

  vlistViewport.style.transform = `translateY(${vlistOffsets[start]}px)`;

  const count = end - start + 1;
  while (vlistViewport.children.length > count) vlistViewport.removeChild(vlistViewport.lastChild);
  while (vlistViewport.children.length < count) {
    const el = document.createElement('div');
    el.className = 'vlist-item';
    vlistViewport.appendChild(el);
  }

  for (let i = start; i <= end; i++) {
    const el = vlistViewport.children[i - start];
    el.style.height = vlistHeights[i] + 'px';
    el.innerHTML = `<div class="item-idx">#${i + 1}</div>${vlistItems[i]}`;
  }

  vlVisible.textContent = count;
}

vlistContainer.addEventListener('scroll', renderVirtualList, { passive: true });

document.querySelector('[data-tab="vlist"]').addEventListener('click', () => {
  setTimeout(initVirtualList, 50);
});

// FPS counter
let fpsFrameCount = 0, fpsLastTime = performance.now();
(function fpsTick() {
  fpsFrameCount++;
  const now = performance.now();
  if (now - fpsLastTime >= 1000) {
    fpsVal.textContent = fpsFrameCount;
    fpsFrameCount = 0;
    fpsLastTime = now;
  }
  requestAnimationFrame(fpsTick);
})();

// ─── Tab 4: Multi-language ────────────────────────────────────────────────────

const LANG_SAMPLES = [
  { lang: 'English', tag: 'EN',
    text: 'Typography is the art of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, and letter-spacing.' },
  { lang: 'Chinese (Simplified)', tag: 'ZH',
    text: '春天到了，万物复苏。小鸟在枝头歌唱，花朵在阳光下绽放。孩子们在公园里快乐地奔跑，老人们在树荫下悠闲地聊天。这美丽的季节让人心旷神怡，充满了生机与活力。' },
  { lang: 'Arabic (RTL)', tag: 'AR',
    text: 'بدأت الرحلة الطويلة في الصحراء الواسعة. كان الهواء جافاً والشمس ساطعة. سار المسافر بخطى ثابتة نحو الأفق البعيد، يحمل في قلبه أملاً كبيراً ويسعى نحو هدفه المنشود.' },
  { lang: 'Japanese', tag: 'JA',
    text: '桜の花びらが風に舞う。春の訪れとともに、街全体が淡いピンク色に染まっていく。人々は公園に集まり、花見を楽しんでいる。この美しい季節は、日本の文化において特別な意味を持っている。' },
  { lang: 'Emoji & Mixed', tag: '🌍',
    text: '🌸 Spring is here! 🌿 Nature is blooming 🌺 with colors 🎨 everywhere. The sun ☀️ shines bright 💡 and birds 🦋 sing 🎵 beautiful melodies. Life is amazing! 🔥✨🎉🌈' },
  { lang: 'Mixed CJK + Latin', tag: 'MX',
    text: 'Pretext supports mixed scripts: 你好 Hello こんにちは 안녕하세요 — all in one paragraph. The library handles bidirectional text and CJK line-breaking rules automatically for beautiful typography.' },
];

const LANG_FONT  = '16px Inter';
const LANG_WIDTH = 320;
const LANG_LH    = 16 * 1.6;

const langLocaleEl   = document.getElementById('lang-locale');
const langClearBtn   = document.getElementById('lang-clear-cache');
const langCacheStatus = document.getElementById('lang-cache-status');

function buildMultiLang() {
  const grid = document.getElementById('lang-grid');
  grid.innerHTML = '';

  const locale = langLocaleEl.value || undefined;
  setLocale(locale);

  LANG_SAMPLES.forEach(sample => {
    const t0 = performance.now();
    const handle = prepare(sample.text, LANG_FONT);
    const t1 = performance.now();
    const result = layout(handle, LANG_WIDTH, LANG_LH);
    const t2 = performance.now();

    const safeText = sample.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const card = document.createElement('div');
    card.className = 'lang-card';
    card.innerHTML = `
      <div class="lang-card-header">
        <span class="lang-tag">${sample.tag}</span>
        <strong>${sample.lang}</strong>
      </div>
      <div class="lang-card-body">
        <div class="lang-cell">
          <div class="lang-cell-label">Sample Text</div>
          <div class="lang-text-preview">${safeText}</div>
        </div>
        <div class="lang-cell" style="max-width:${LANG_WIDTH + 32}px;">
          <div class="lang-cell-label">DOM Render (${LANG_WIDTH}px)</div>
          <div style="font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.6;word-break:break-word;overflow-wrap:break-word;width:${LANG_WIDTH}px;border:1px dashed var(--border);border-radius:4px;padding:6px;background:var(--bg);">${safeText}</div>
        </div>
        <div class="lang-cell">
          <div class="lang-cell-label">Pretext Metrics</div>
          <div class="lang-metrics">
            <div><span>Height: </span><strong>${fmtPx(result.height)}</strong></div>
            <div><span>Lines: </span><strong>${result.lineCount}</strong></div>
            <div><span>prepare(): </span><strong>${fmtMs(t1 - t0)}</strong></div>
            <div><span>layout(): </span><strong>${fmtMs(t2 - t1)}</strong></div>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function initMultiLang() {
  const grid = document.getElementById('lang-grid');
  if (grid.children.length > 0) return;
  buildMultiLang();
}

langLocaleEl.addEventListener('change', () => {
  buildMultiLang();
  langCacheStatus.textContent = `Locale set to "${langLocaleEl.value || 'default'}"`;
  setTimeout(() => { langCacheStatus.textContent = ''; }, 2000);
});

langClearBtn.addEventListener('click', () => {
  clearCache();
  buildMultiLang();
  langCacheStatus.textContent = 'Cache cleared — timings show cold path ✓';
  flashBtn(langClearBtn);
  setTimeout(() => { langCacheStatus.textContent = ''; }, 3000);
});

document.querySelector('[data-tab="multilang"]').addEventListener('click', () => {
  setTimeout(initMultiLang, 50);
});

// ─── Tab 5: Line-by-line Rendering ───────────────────────────────────────────

const lwText       = document.getElementById('lw-text');
const lwWidth      = document.getElementById('lw-width');
const lwWidthVal   = document.getElementById('lw-width-val');
const lwFontSize   = document.getElementById('lw-fontsize');
const lwFontSizeVal = document.getElementById('lw-fontsize-val');
const lwLineCount  = document.getElementById('lw-linecount');
const lwHeight     = document.getElementById('lw-height');
const lwTime       = document.getElementById('lw-time');
const lineOutput   = document.getElementById('line-output');

function updateLineRendering() {
  const text = lwText.value;
  const containerWidth = parseInt(lwWidth.value, 10);
  const fontSize = parseInt(lwFontSize.value, 10);
  const font = `${fontSize}px Inter`;
  const lineHeight = fontSize * 1.5;

  lwWidthVal.textContent = containerWidth + 'px';
  lwFontSizeVal.textContent = fontSize + 'px';

  const t0 = performance.now();
  const prepared = prepareWithSegments(text, font);
  const { lines, lineCount, height } = layoutWithLines(prepared, containerWidth, lineHeight);
  const t1 = performance.now();

  lwLineCount.textContent = lineCount;
  lwHeight.textContent = fmtPx(height);
  lwTime.textContent = fmtMs(t1 - t0);

  lineOutput.innerHTML = '';
  lines.forEach((line, i) => {
    const el = document.createElement('span');
    el.className = 'rendered-line';
    el.style.fontSize = fontSize + 'px';
    el.style.lineHeight = lineHeight + 'px';
    el.style.maxWidth = containerWidth + 'px';
    el.innerHTML = `<span class="line-meta">${String(i + 1).padStart(2, '0')} · ${line.width.toFixed(0)}px</span>${line.text || '\u200B'}`;
    lineOutput.appendChild(el);
  });
}

lwText.addEventListener('input', updateLineRendering);
lwWidth.addEventListener('input', updateLineRendering);
lwFontSize.addEventListener('input', updateLineRendering);
document.querySelector('[data-tab="linewise"]').addEventListener('click', () => setTimeout(updateLineRendering, 50));
updateLineRendering();

// ─── Tab 6: Benchmark ────────────────────────────────────────────────────────

const benchText    = document.getElementById('bench-text');
const benchN       = document.getElementById('bench-n');
const benchNVal    = document.getElementById('bench-n-val');
const benchWidthEl = document.getElementById('bench-width');
const benchWidthVal = document.getElementById('bench-width-val');
const benchRunBtn  = document.getElementById('bench-run');
const benchStatus  = document.getElementById('bench-status');
const benchLog     = document.getElementById('bench-log');

benchN.addEventListener('input', () => { benchNVal.textContent = benchN.value; });
benchWidthEl.addEventListener('input', () => { benchWidthVal.textContent = benchWidthEl.value + 'px'; });

function logLine(msg) {
  benchLog.innerHTML += msg + '\n';
  benchLog.scrollTop = benchLog.scrollHeight;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

benchRunBtn.addEventListener('click', async () => {
  const text = benchText.value;
  const n = parseInt(benchN.value, 10);
  const width = parseInt(benchWidthEl.value, 10);
  const font = '16px Inter';
  const lineHeight = 16 * 1.6;

  benchRunBtn.disabled = true;
  benchStatus.textContent = 'Running…';
  benchLog.textContent = '';

  await sleep(20); // let UI update

  // ── Cold prepare: clear cache each time ──────────────────────────────────
  logLine(`<span style="color:var(--accent)">● Cold prepare() × ${n} iterations</span>`);
  const coldTimes = [];
  for (let i = 0; i < n; i++) {
    clearCache();
    const t0 = performance.now();
    prepare(text, font);
    coldTimes.push(performance.now() - t0);
    if (i % 20 === 19) await sleep(0); // yield to keep UI alive
  }
  const coldAvg = coldTimes.reduce((a, b) => a + b, 0) / n;
  const coldMin = Math.min(...coldTimes);
  const coldMax = Math.max(...coldTimes);
  logLine(`  avg: ${fmtMs(coldAvg)}  min: ${fmtMs(coldMin)}  max: ${fmtMs(coldMax)}`);
  logLine(`  throughput: ${(1000 / coldAvg).toFixed(0)} ops/sec`);

  await sleep(10);

  // ── Warm prepare: cache populated ────────────────────────────────────────
  clearCache();
  prepare(text, font); // prime the cache
  logLine(`\n<span style="color:var(--yellow)">● Warm prepare() × ${n} iterations (cache hot)</span>`);
  const warmTimes = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    prepare(text, font);
    warmTimes.push(performance.now() - t0);
    if (i % 20 === 19) await sleep(0);
  }
  const warmAvg = warmTimes.reduce((a, b) => a + b, 0) / n;
  const warmMin = Math.min(...warmTimes);
  logLine(`  avg: ${fmtMs(warmAvg)}  min: ${fmtMs(warmMin)}`);
  logLine(`  throughput: ${(1000 / warmAvg).toFixed(0)} ops/sec`);
  logLine(`  speedup vs cold: ${(coldAvg / warmAvg).toFixed(1)}×`);

  await sleep(10);

  // ── Hot layout: handle prepared once, layout N times ─────────────────────
  const handle = prepare(text, font);
  logLine(`\n<span style="color:var(--green)">● layout() × ${n} iterations (prepared handle reused)</span>`);
  const layoutTimes = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    layout(handle, width, lineHeight);
    layoutTimes.push(performance.now() - t0);
    if (i % 50 === 49) await sleep(0);
  }
  const layoutAvg = layoutTimes.reduce((a, b) => a + b, 0) / n;
  const layoutMin = Math.min(...layoutTimes);
  logLine(`  avg: ${fmtMs(layoutAvg)}  min: ${fmtMs(layoutMin)}`);
  logLine(`  throughput: ${(1000 / layoutAvg).toFixed(0)} ops/sec`);
  logLine(`  speedup vs cold prepare: ${(coldAvg / layoutAvg).toFixed(0)}×`);

  await sleep(10);

  // ── Update cards ──────────────────────────────────────────────────────────
  document.getElementById('bench-prep-cold').textContent = fmtMs(coldAvg);
  document.getElementById('bench-prep-cold-sub').textContent = `${(1000 / coldAvg).toFixed(0)} ops/sec`;
  document.getElementById('bench-prep-warm').textContent = fmtMs(warmAvg);
  document.getElementById('bench-prep-warm-sub').textContent = `${(coldAvg / warmAvg).toFixed(1)}× faster than cold`;
  document.getElementById('bench-layout').textContent = fmtMs(layoutAvg);
  document.getElementById('bench-layout-sub').textContent = `${(coldAvg / layoutAvg).toFixed(0)}× faster than cold prepare`;

  // ── Bar chart ─────────────────────────────────────────────────────────────
  const maxTime = coldAvg; // cold is always slowest
  document.getElementById('bar-cold').style.width = '100%';
  document.getElementById('bar-warm').style.width = Math.min(100, (warmAvg / maxTime) * 100) + '%';
  document.getElementById('bar-layout').style.width = Math.min(100, (layoutAvg / maxTime) * 100) + '%';
  document.getElementById('bar-cold-val').textContent = fmtMs(coldAvg);
  document.getElementById('bar-warm-val').textContent = fmtMs(warmAvg);
  document.getElementById('bar-layout-val').textContent = fmtMs(layoutAvg);

  logLine(`\n<span style="color:var(--text-muted)">Done. ${n} iterations each.</span>`);
  benchStatus.textContent = 'Complete';
  benchRunBtn.disabled = false;
});
