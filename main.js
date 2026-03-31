import {
  prepare,
  layout,
  prepareWithSegments,
  layoutWithLines,
  clearCache,
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtMs(ms) {
  if (ms < 0.01) return '<0.01ms';
  return ms.toFixed(3) + 'ms';
}

function fmtPx(n) {
  return n.toFixed(2) + 'px';
}

// ─── Tab 1: Live Playground ───────────────────────────────────────────────────

const pgText = document.getElementById('pg-text');
const pgFontSize = document.getElementById('pg-fontsize');
const pgFontSizeVal = document.getElementById('pg-fontsize-val');
const pgWidth = document.getElementById('pg-width');
const pgWidthVal = document.getElementById('pg-width-val');
const pgLh = document.getElementById('pg-lh');
const pgLhVal = document.getElementById('pg-lh-val');

const pgPredHeight = document.getElementById('pg-pred-height');
const pgPredLines = document.getElementById('pg-pred-lines');
const pgPredPrep = document.getElementById('pg-pred-prep');
const pgPredLayout = document.getElementById('pg-pred-layout');
const pgPredViz = document.getElementById('pg-pred-viz');

const pgDomHeight = document.getElementById('pg-dom-height');
const pgDelta = document.getElementById('pg-delta');
const pgDomTime = document.getElementById('pg-dom-time');
const pgDomRender = document.getElementById('pg-dom-render');

function updatePlayground() {
  const text = pgText.value;
  const fontSize = parseInt(pgFontSize.value, 10);
  const containerWidth = parseInt(pgWidth.value, 10);
  // slider 10–30 maps to lineHeight 1.0–3.0 (value / 10)
  const lineHeightMultiplier = parseInt(pgLh.value, 10) / 10;
  const lineHeight = fontSize * lineHeightMultiplier;
  const font = `${fontSize}px Inter`;

  pgFontSizeVal.textContent = fontSize + 'px';
  pgWidthVal.textContent = containerWidth + 'px';
  pgLhVal.textContent = lineHeightMultiplier.toFixed(1);

  // Pretext measurement
  const t0 = performance.now();
  const handle = prepare(text, font);
  const t1 = performance.now();
  const result = layout(handle, containerWidth, lineHeight);
  const t2 = performance.now();

  pgPredHeight.textContent = fmtPx(result.height);
  pgPredLines.textContent = result.lineCount;
  pgPredPrep.textContent = fmtMs(t1 - t0);
  pgPredLayout.textContent = fmtMs(t2 - t1);

  // Visualize predicted height as a colored block
  pgPredViz.style.width = containerWidth + 'px';
  pgPredViz.style.height = result.height + 'px';
  pgPredViz.style.maxWidth = '100%';

  // DOM rendering + actual measurement
  pgDomRender.style.width = containerWidth + 'px';
  pgDomRender.style.fontSize = fontSize + 'px';
  pgDomRender.style.lineHeight = lineHeightMultiplier;
  pgDomRender.style.fontFamily = 'Inter, system-ui, sans-serif';
  pgDomRender.textContent = text;

  const t3 = performance.now();
  const bcr = pgDomRender.getBoundingClientRect();
  const t4 = performance.now();

  const domH = bcr.height;
  pgDomHeight.textContent = fmtPx(domH);
  pgDomTime.textContent = fmtMs(t4 - t3);

  const delta = Math.abs(result.height - domH);
  pgDelta.textContent = fmtPx(delta);
  pgDelta.className = 'metric-val ' + (delta < 2 ? 'good' : delta < 5 ? 'warn' : '');
}

pgText.addEventListener('input', updatePlayground);
pgFontSize.addEventListener('input', updatePlayground);
pgWidth.addEventListener('input', updatePlayground);
pgLh.addEventListener('input', updatePlayground);

// Initial render
updatePlayground();

// ─── Tab 2: Resize Timing ─────────────────────────────────────────────────────

const resizeBox = document.getElementById('resize-box');
const RESIZE_TEXT = resizeBox.textContent.trim();
const RESIZE_FONT = '15px Inter';

let resizePrepared = prepare(RESIZE_TEXT, RESIZE_FONT);
let resizeCount = 0;
let pretextTimes = [];
let domTimes = [];

const tPretext = document.getElementById('t-pretext');
const tDom = document.getElementById('t-dom');
const tW = document.getElementById('t-w');
const tPredH = document.getElementById('t-pred-h');
const tDomH = document.getElementById('t-dom-h');
const tCount = document.getElementById('t-count');
const tAvgPretext = document.getElementById('t-avg-pretext');
const tAvgDom = document.getElementById('t-avg-dom');

const ro = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { width } = entry.contentRect;

    // Pretext layout timing
    const p0 = performance.now();
    const lh = 15 * 1.6;
    const presult = layout(resizePrepared, width, lh);
    const p1 = performance.now();
    const pretextMs = p1 - p0;

    // DOM getBoundingClientRect timing
    const d0 = performance.now();
    const bcr = resizeBox.getBoundingClientRect();
    const d1 = performance.now();
    const domMs = d1 - d0;

    pretextTimes.push(pretextMs);
    domTimes.push(domMs);
    resizeCount++;

    tPretext.textContent = fmtMs(pretextMs);
    tDom.textContent = fmtMs(domMs);
    tW.textContent = Math.round(width) + 'px';
    tPredH.textContent = fmtPx(presult.height);
    tDomH.textContent = fmtPx(bcr.height);
    tCount.textContent = resizeCount;

    const avgP = pretextTimes.reduce((a, b) => a + b, 0) / pretextTimes.length;
    const avgD = domTimes.reduce((a, b) => a + b, 0) / domTimes.length;
    tAvgPretext.textContent = fmtMs(avgP);
    tAvgDom.textContent = fmtMs(avgD);
  }
});

ro.observe(resizeBox);

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
  const words = [];
  for (let i = 0; i < count; i++) {
    words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }
  const s = words.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

const ITEM_COUNT = 500;
const VLIST_FONT = '14px Inter';
const VLIST_WIDTH = 700; // approximate, we'll use container clientWidth
const VLIST_LH_MULT = 1.6;

const vlistContainer = document.getElementById('vlist-container');
const vlistSpacer = document.getElementById('vlist-spacer');
const vlistViewport = document.getElementById('vlist-viewport');
const vlMeasured = document.getElementById('vl-measured');
const vlMtime = document.getElementById('vl-mtime');
const vlVisible = document.getElementById('vl-visible');
const fpsVal = document.getElementById('fps-val');

let vlistItems = [];
let vlistOffsets = []; // top offset for each item
let vlistHeights = [];
let vlistTotalHeight = 0;
let vlistInitialized = false;

function initVirtualList() {
  if (vlistInitialized) return;
  vlistInitialized = true;

  // Generate items
  const texts = [];
  for (let i = 0; i < ITEM_COUNT; i++) {
    texts.push(randomSentence(8, 60));
  }
  vlistItems = texts;

  const containerWidth = vlistContainer.clientWidth - 40; // padding
  const fontSize = 14;
  const lineHeight = fontSize * VLIST_LH_MULT;

  // Measure all items with Pretext
  const t0 = performance.now();
  const handles = texts.map(t => prepare(t, VLIST_FONT));
  const results = handles.map(h => layout(h, containerWidth, lineHeight));
  const t1 = performance.now();

  vlistHeights = results.map(r => r.height + 24 + 4 + 16); // height + padding (12*2) + idx row (~20px)

  // Compute cumulative offsets
  vlistOffsets = new Array(ITEM_COUNT + 1);
  vlistOffsets[0] = 0;
  for (let i = 0; i < ITEM_COUNT; i++) {
    vlistOffsets[i + 1] = vlistOffsets[i] + vlistHeights[i];
  }
  vlistTotalHeight = vlistOffsets[ITEM_COUNT];

  vlistSpacer.style.height = vlistTotalHeight + 'px';
  vlMeasured.textContent = ITEM_COUNT;
  vlMtime.textContent = fmtMs(t1 - t0);

  renderVirtualList();
}

function findFirstVisible(scrollTop) {
  // Binary search
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
  const viewportHeight = vlistContainer.clientHeight;

  const start = Math.max(0, findFirstVisible(scrollTop) - 2);
  let end = start;
  while (end < ITEM_COUNT && vlistOffsets[end] < scrollTop + viewportHeight) end++;
  end = Math.min(ITEM_COUNT - 1, end + 2);

  vlistViewport.style.transform = `translateY(${vlistOffsets[start]}px)`;

  // Diff rendering: rebuild only if needed
  const count = end - start + 1;
  while (vlistViewport.children.length > count) {
    vlistViewport.removeChild(vlistViewport.lastChild);
  }
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

// FPS counter
let fpsFrameCount = 0;
let fpsLastTime = performance.now();

function fpsTick() {
  fpsFrameCount++;
  const now = performance.now();
  if (now - fpsLastTime >= 1000) {
    fpsVal.textContent = fpsFrameCount;
    fpsFrameCount = 0;
    fpsLastTime = now;
  }
  requestAnimationFrame(fpsTick);
}
requestAnimationFrame(fpsTick);

// Initialize virtual list when its tab is first activated
document.querySelector('[data-tab="vlist"]').addEventListener('click', () => {
  setTimeout(initVirtualList, 50);
});

// ─── Tab 4: Multi-language ────────────────────────────────────────────────────

const LANG_SAMPLES = [
  {
    lang: 'English',
    tag: 'EN',
    text: 'Typography is the art of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, and letter-spacing.',
  },
  {
    lang: 'Chinese (Simplified)',
    tag: 'ZH',
    text: '春天到了，万物复苏。小鸟在枝头歌唱，花朵在阳光下绽放。孩子们在公园里快乐地奔跑，老人们在树荫下悠闲地聊天。这美丽的季节让人心旷神怡，充满了生机与活力。',
  },
  {
    lang: 'Arabic (RTL)',
    tag: 'AR',
    text: 'بدأت الرحلة الطويلة في الصحراء الواسعة. كان الهواء جافاً والشمس ساطعة. سار المسافر بخطى ثابتة نحو الأفق البعيد، يحمل في قلبه أملاً كبيراً ويسعى نحو هدفه المنشود.',
  },
  {
    lang: 'Japanese',
    tag: 'JA',
    text: '桜の花びらが風に舞う。春の訪れとともに、街全体が淡いピンク色に染まっていく。人々は公園に集まり、花見を楽しんでいる。この美しい季節は、日本の文化において特別な意味を持っている。',
  },
  {
    lang: 'Emoji & Mixed',
    tag: '🌍',
    text: '🌸 Spring is here! 🌿 Nature is blooming 🌺 with colors 🎨 everywhere. The sun ☀️ shines bright 💡 and birds 🦋 sing 🎵 beautiful melodies. Life is amazing! 🔥✨🎉🌈',
  },
  {
    lang: 'Mixed CJK + Latin',
    tag: 'MX',
    text: 'Pretext supports mixed scripts: 你好 Hello こんにちは 안녕하세요 — all in one paragraph. The library handles bidirectional text and CJK line-breaking rules automatically for beautiful typography.',
  },
];

const LANG_FONT = '16px Inter';
const LANG_WIDTH = 320;
const LANG_LH = 16 * 1.6;

function initMultiLang() {
  const grid = document.getElementById('lang-grid');
  if (grid.children.length > 0) return;

  LANG_SAMPLES.forEach(sample => {
    const t0 = performance.now();
    const handle = prepare(sample.text, LANG_FONT);
    const t1 = performance.now();
    const result = layout(handle, LANG_WIDTH, LANG_LH);
    const t2 = performance.now();

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
          <div class="lang-text-preview">${sample.text}</div>
        </div>
        <div class="lang-cell" style="width:${LANG_WIDTH}px;min-width:${LANG_WIDTH}px;max-width:${LANG_WIDTH}px;">
          <div class="lang-cell-label">DOM Render (${LANG_WIDTH}px)</div>
          <div id="lang-dom-${sample.tag}" style="font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.6;word-break:break-word;overflow-wrap:break-word;border:1px dashed var(--border);border-radius:4px;padding:6px;background:var(--bg);">${sample.text}</div>
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
      </div>
    `;
    grid.appendChild(card);
  });
}

document.querySelector('[data-tab="multilang"]').addEventListener('click', () => {
  setTimeout(initMultiLang, 50);
});

// ─── Tab 5: Line-by-line Rendering ───────────────────────────────────────────

const lwText = document.getElementById('lw-text');
const lwWidth = document.getElementById('lw-width');
const lwWidthVal = document.getElementById('lw-width-val');
const lwFontSize = document.getElementById('lw-fontsize');
const lwFontSizeVal = document.getElementById('lw-fontsize-val');
const lwLineCount = document.getElementById('lw-linecount');
const lwTime = document.getElementById('lw-time');
const lineOutput = document.getElementById('line-output');

const LINE_COLORS = [
  'rgba(79,142,247,0.10)',
  'rgba(52,211,153,0.08)',
];

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
  const { lines, lineCount } = layoutWithLines(prepared, containerWidth, lineHeight);
  const t1 = performance.now();

  lwLineCount.textContent = lineCount;
  lwTime.textContent = fmtMs(t1 - t0);

  // Render each line
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

document.querySelector('[data-tab="linewise"]').addEventListener('click', () => {
  setTimeout(updateLineRendering, 50);
});

// Initial render for line tab if it's active
updateLineRendering();
