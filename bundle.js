// node_modules/@chenglou/pretext/dist/bidi.js
var baseTypes = [
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "S",
  "B",
  "S",
  "WS",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "B",
  "B",
  "S",
  "WS",
  "ON",
  "ON",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "CS",
  "ON",
  "CS",
  "ON",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "CS",
  "ON",
  "ET",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ET",
  "ET",
  "EN",
  "EN",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "EN",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L"
];
var arabicTypes = [
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "CS",
  "AL",
  "ON",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "ET",
  "AN",
  "AN",
  "AL",
  "AL",
  "AL",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL"
];
function classifyChar(charCode) {
  if (charCode <= 255)
    return baseTypes[charCode];
  if (1424 <= charCode && charCode <= 1524)
    return "R";
  if (1536 <= charCode && charCode <= 1791)
    return arabicTypes[charCode & 255];
  if (1792 <= charCode && charCode <= 2220)
    return "AL";
  return "L";
}
function computeBidiLevels(str) {
  const len = str.length;
  if (len === 0)
    return null;
  const types = new Array(len);
  let numBidi = 0;
  for (let i = 0; i < len; i++) {
    const t = classifyChar(str.charCodeAt(i));
    if (t === "R" || t === "AL" || t === "AN")
      numBidi++;
    types[i] = t;
  }
  if (numBidi === 0)
    return null;
  const startLevel = len / numBidi < 0.3 ? 0 : 1;
  const levels = new Int8Array(len);
  for (let i = 0; i < len; i++)
    levels[i] = startLevel;
  const e = startLevel & 1 ? "R" : "L";
  const sor = e;
  let lastType = sor;
  for (let i = 0; i < len; i++) {
    if (types[i] === "NSM")
      types[i] = lastType;
    else
      lastType = types[i];
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "AL" ? "AN" : "EN";
    else if (t === "R" || t === "L" || t === "AL")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "AL")
      types[i] = "R";
  }
  for (let i = 1; i < len - 1; i++) {
    if (types[i] === "ES" && types[i - 1] === "EN" && types[i + 1] === "EN") {
      types[i] = "EN";
    }
    if (types[i] === "CS" && (types[i - 1] === "EN" || types[i - 1] === "AN") && types[i + 1] === types[i - 1]) {
      types[i] = types[i - 1];
    }
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "EN")
      continue;
    let j;
    for (j = i - 1; j >= 0 && types[j] === "ET"; j--)
      types[j] = "EN";
    for (j = i + 1; j < len && types[j] === "ET"; j++)
      types[j] = "EN";
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "WS" || t === "ES" || t === "ET" || t === "CS")
      types[i] = "ON";
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "L" ? "L" : "EN";
    else if (t === "R" || t === "L")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "ON")
      continue;
    let end = i + 1;
    while (end < len && types[end] === "ON")
      end++;
    const before = i > 0 ? types[i - 1] : sor;
    const after = end < len ? types[end] : sor;
    const bDir = before !== "L" ? "R" : "L";
    const aDir = after !== "L" ? "R" : "L";
    if (bDir === aDir) {
      for (let j = i; j < end; j++)
        types[j] = bDir;
    }
    i = end - 1;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "ON")
      types[i] = e;
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if ((levels[i] & 1) === 0) {
      if (t === "R")
        levels[i]++;
      else if (t === "AN" || t === "EN")
        levels[i] += 2;
    } else if (t === "L" || t === "AN" || t === "EN") {
      levels[i]++;
    }
  }
  return levels;
}
function computeSegmentLevels(normalized, segStarts) {
  const bidiLevels = computeBidiLevels(normalized);
  if (bidiLevels === null)
    return null;
  const segLevels = new Int8Array(segStarts.length);
  for (let i = 0; i < segStarts.length; i++) {
    segLevels[i] = bidiLevels[segStarts[i]];
  }
  return segLevels;
}

// node_modules/@chenglou/pretext/dist/analysis.js
var collapsibleWhitespaceRunRe = /[ \t\n\r\f]+/g;
var needsWhitespaceNormalizationRe = /[\t\n\r\f]| {2,}|^ | $/;
function getWhiteSpaceProfile(whiteSpace) {
  const mode = whiteSpace ?? "normal";
  return mode === "pre-wrap" ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true } : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
}
function normalizeWhitespaceNormal(text) {
  if (!needsWhitespaceNormalizationRe.test(text))
    return text;
  let normalized = text.replace(collapsibleWhitespaceRunRe, " ");
  if (normalized.charCodeAt(0) === 32) {
    normalized = normalized.slice(1);
  }
  if (normalized.length > 0 && normalized.charCodeAt(normalized.length - 1) === 32) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}
function normalizeWhitespacePreWrap(text) {
  if (!/[\r\f]/.test(text))
    return text.replace(/\r\n/g, "\n");
  return text.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n");
}
var sharedWordSegmenter = null;
var segmenterLocale;
function getSharedWordSegmenter() {
  if (sharedWordSegmenter === null) {
    sharedWordSegmenter = new Intl.Segmenter(segmenterLocale, { granularity: "word" });
  }
  return sharedWordSegmenter;
}
var arabicScriptRe = /\p{Script=Arabic}/u;
var combiningMarkRe = /\p{M}/u;
var decimalDigitRe = /\p{Nd}/u;
function containsArabicScript(text) {
  return arabicScriptRe.test(text);
}
function isCJK(s) {
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if (c >= 19968 && c <= 40959 || c >= 13312 && c <= 19903 || c >= 131072 && c <= 173791 || c >= 173824 && c <= 177983 || c >= 177984 && c <= 178207 || c >= 178208 && c <= 183983 || c >= 183984 && c <= 191471 || c >= 196608 && c <= 201551 || c >= 63744 && c <= 64255 || c >= 194560 && c <= 195103 || c >= 12288 && c <= 12351 || c >= 12352 && c <= 12447 || c >= 12448 && c <= 12543 || c >= 44032 && c <= 55215 || c >= 65280 && c <= 65519) {
      return true;
    }
  }
  return false;
}
var kinsokuStart = /* @__PURE__ */ new Set([
  "\uFF0C",
  "\uFF0E",
  "\uFF01",
  "\uFF1A",
  "\uFF1B",
  "\uFF1F",
  "\u3001",
  "\u3002",
  "\u30FB",
  "\uFF09",
  "\u3015",
  "\u3009",
  "\u300B",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u3017",
  "\u3019",
  "\u301B",
  "\u30FC",
  "\u3005",
  "\u303B",
  "\u309D",
  "\u309E",
  "\u30FD",
  "\u30FE"
]);
var kinsokuEnd = /* @__PURE__ */ new Set([
  '"',
  "(",
  "[",
  "{",
  "\u201C",
  "\u2018",
  "\xAB",
  "\u2039",
  "\uFF08",
  "\u3014",
  "\u3008",
  "\u300A",
  "\u300C",
  "\u300E",
  "\u3010",
  "\u3016",
  "\u3018",
  "\u301A"
]);
var forwardStickyGlue = /* @__PURE__ */ new Set([
  "'",
  "\u2019"
]);
var leftStickyPunctuation = /* @__PURE__ */ new Set([
  ".",
  ",",
  "!",
  "?",
  ":",
  ";",
  "\u060C",
  "\u061B",
  "\u061F",
  "\u0964",
  "\u0965",
  "\u104A",
  "\u104B",
  "\u104C",
  "\u104D",
  "\u104F",
  ")",
  "]",
  "}",
  "%",
  '"',
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u2026"
]);
var arabicNoSpaceTrailingPunctuation = /* @__PURE__ */ new Set([
  ":",
  ".",
  "\u060C",
  "\u061B"
]);
var myanmarMedialGlue = /* @__PURE__ */ new Set([
  "\u104F"
]);
var closingQuoteChars = /* @__PURE__ */ new Set([
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u300B",
  "\u3009",
  "\u3015",
  "\uFF09"
]);
function isLeftStickyPunctuationSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  let sawPunctuation = false;
  for (const ch of segment) {
    if (leftStickyPunctuation.has(ch)) {
      sawPunctuation = true;
      continue;
    }
    if (sawPunctuation && combiningMarkRe.test(ch))
      continue;
    return false;
  }
  return sawPunctuation;
}
function isCJKLineStartProhibitedSegment(segment) {
  for (const ch of segment) {
    if (!kinsokuStart.has(ch) && !leftStickyPunctuation.has(ch))
      return false;
  }
  return segment.length > 0;
}
function isForwardStickyClusterSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  for (const ch of segment) {
    if (!kinsokuEnd.has(ch) && !forwardStickyGlue.has(ch) && !combiningMarkRe.test(ch))
      return false;
  }
  return segment.length > 0;
}
function isEscapedQuoteClusterSegment(segment) {
  let sawQuote = false;
  for (const ch of segment) {
    if (ch === "\\" || combiningMarkRe.test(ch))
      continue;
    if (kinsokuEnd.has(ch) || leftStickyPunctuation.has(ch) || forwardStickyGlue.has(ch)) {
      sawQuote = true;
      continue;
    }
    return false;
  }
  return sawQuote;
}
function splitTrailingForwardStickyCluster(text) {
  const chars = Array.from(text);
  let splitIndex = chars.length;
  while (splitIndex > 0) {
    const ch = chars[splitIndex - 1];
    if (combiningMarkRe.test(ch)) {
      splitIndex--;
      continue;
    }
    if (kinsokuEnd.has(ch) || forwardStickyGlue.has(ch)) {
      splitIndex--;
      continue;
    }
    break;
  }
  if (splitIndex <= 0 || splitIndex === chars.length)
    return null;
  return {
    head: chars.slice(0, splitIndex).join(""),
    tail: chars.slice(splitIndex).join("")
  };
}
function isRepeatedSingleCharRun(segment, ch) {
  if (segment.length === 0)
    return false;
  for (const part of segment) {
    if (part !== ch)
      return false;
  }
  return true;
}
function endsWithArabicNoSpacePunctuation(segment) {
  if (!containsArabicScript(segment) || segment.length === 0)
    return false;
  return arabicNoSpaceTrailingPunctuation.has(segment[segment.length - 1]);
}
function endsWithMyanmarMedialGlue(segment) {
  if (segment.length === 0)
    return false;
  return myanmarMedialGlue.has(segment[segment.length - 1]);
}
function splitLeadingSpaceAndMarks(segment) {
  if (segment.length < 2 || segment[0] !== " ")
    return null;
  const marks = segment.slice(1);
  if (/^\p{M}+$/u.test(marks)) {
    return { space: " ", marks };
  }
  return null;
}
function endsWithClosingQuote(text) {
  for (let i = text.length - 1; i >= 0; i--) {
    const ch = text[i];
    if (closingQuoteChars.has(ch))
      return true;
    if (!leftStickyPunctuation.has(ch))
      return false;
  }
  return false;
}
function classifySegmentBreakChar(ch, whiteSpaceProfile) {
  if (whiteSpaceProfile.preserveOrdinarySpaces || whiteSpaceProfile.preserveHardBreaks) {
    if (ch === " ")
      return "preserved-space";
    if (ch === "	")
      return "tab";
    if (whiteSpaceProfile.preserveHardBreaks && ch === "\n")
      return "hard-break";
  }
  if (ch === " ")
    return "space";
  if (ch === "\xA0" || ch === "\u202F" || ch === "\u2060" || ch === "\uFEFF") {
    return "glue";
  }
  if (ch === "\u200B")
    return "zero-width-break";
  if (ch === "\xAD")
    return "soft-hyphen";
  return "text";
}
function splitSegmentByBreakKind(segment, isWordLike, start, whiteSpaceProfile) {
  const pieces = [];
  let currentKind = null;
  let currentText = "";
  let currentStart = start;
  let currentWordLike = false;
  let offset = 0;
  for (const ch of segment) {
    const kind = classifySegmentBreakChar(ch, whiteSpaceProfile);
    const wordLike = kind === "text" && isWordLike;
    if (currentKind !== null && kind === currentKind && wordLike === currentWordLike) {
      currentText += ch;
      offset += ch.length;
      continue;
    }
    if (currentKind !== null) {
      pieces.push({
        text: currentText,
        isWordLike: currentWordLike,
        kind: currentKind,
        start: currentStart
      });
    }
    currentKind = kind;
    currentText = ch;
    currentStart = start + offset;
    currentWordLike = wordLike;
    offset += ch.length;
  }
  if (currentKind !== null) {
    pieces.push({
      text: currentText,
      isWordLike: currentWordLike,
      kind: currentKind,
      start: currentStart
    });
  }
  return pieces;
}
function isTextRunBoundary(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "zero-width-break" || kind === "hard-break";
}
var urlSchemeSegmentRe = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
function isUrlLikeRunStart(segmentation, index) {
  const text = segmentation.texts[index];
  if (text.startsWith("www."))
    return true;
  return urlSchemeSegmentRe.test(text) && index + 1 < segmentation.len && segmentation.kinds[index + 1] === "text" && segmentation.texts[index + 1] === "//";
}
function isUrlQueryBoundarySegment(text) {
  return text.includes("?") && (text.includes("://") || text.startsWith("www."));
}
function mergeUrlLikeRuns(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < segmentation.len; i++) {
    if (kinds[i] !== "text" || !isUrlLikeRunStart(segmentation, i))
      continue;
    let j = i + 1;
    while (j < segmentation.len && !isTextRunBoundary(kinds[j])) {
      texts[i] += texts[j];
      isWordLike[i] = true;
      const endsQueryPrefix = texts[j].includes("?");
      kinds[j] = "text";
      texts[j] = "";
      j++;
      if (endsQueryPrefix)
        break;
    }
  }
  let compactLen = 0;
  for (let read = 0; read < texts.length; read++) {
    const text = texts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      texts[compactLen] = text;
      isWordLike[compactLen] = isWordLike[read];
      kinds[compactLen] = kinds[read];
      starts[compactLen] = starts[read];
    }
    compactLen++;
  }
  texts.length = compactLen;
  isWordLike.length = compactLen;
  kinds.length = compactLen;
  starts.length = compactLen;
  return {
    len: compactLen,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeUrlQueryRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
    if (!isUrlQueryBoundarySegment(text))
      continue;
    const nextIndex = i + 1;
    if (nextIndex >= segmentation.len || isTextRunBoundary(segmentation.kinds[nextIndex])) {
      continue;
    }
    let queryText = "";
    const queryStart = segmentation.starts[nextIndex];
    let j = nextIndex;
    while (j < segmentation.len && !isTextRunBoundary(segmentation.kinds[j])) {
      queryText += segmentation.texts[j];
      j++;
    }
    if (queryText.length > 0) {
      texts.push(queryText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(queryStart);
      i = j - 1;
    }
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
var numericJoinerChars = /* @__PURE__ */ new Set([
  ":",
  "-",
  "/",
  "\xD7",
  ",",
  ".",
  "+",
  "\u2013",
  "\u2014"
]);
var asciiPunctuationChainSegmentRe = /^[A-Za-z0-9_]+[,:;]*$/;
var asciiPunctuationChainTrailingJoinersRe = /[,:;]+$/;
function segmentContainsDecimalDigit(text) {
  for (const ch of text) {
    if (decimalDigitRe.test(ch))
      return true;
  }
  return false;
}
function isNumericRunSegment(text) {
  if (text.length === 0)
    return false;
  for (const ch of text) {
    if (decimalDigitRe.test(ch) || numericJoinerChars.has(ch))
      continue;
    return false;
  }
  return true;
}
function mergeNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    if (kind === "text" && isNumericRunSegment(text) && segmentContainsDecimalDigit(text)) {
      let mergedText = text;
      let j = i + 1;
      while (j < segmentation.len && segmentation.kinds[j] === "text" && isNumericRunSegment(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeAsciiPunctuationChains(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    const wordLike = segmentation.isWordLike[i];
    if (kind === "text" && wordLike && asciiPunctuationChainSegmentRe.test(text)) {
      let mergedText = text;
      let j = i + 1;
      while (asciiPunctuationChainTrailingJoinersRe.test(mergedText) && j < segmentation.len && segmentation.kinds[j] === "text" && segmentation.isWordLike[j] && asciiPunctuationChainSegmentRe.test(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function splitHyphenatedNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    if (segmentation.kinds[i] === "text" && text.includes("-")) {
      const parts = text.split("-");
      let shouldSplit = parts.length > 1;
      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        if (!shouldSplit)
          break;
        if (part.length === 0 || !segmentContainsDecimalDigit(part) || !isNumericRunSegment(part)) {
          shouldSplit = false;
        }
      }
      if (shouldSplit) {
        let offset = 0;
        for (let j = 0; j < parts.length; j++) {
          const part = parts[j];
          const splitText = j < parts.length - 1 ? `${part}-` : part;
          texts.push(splitText);
          isWordLike.push(true);
          kinds.push("text");
          starts.push(segmentation.starts[i] + offset);
          offset += splitText.length;
        }
        continue;
      }
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeGlueConnectedTextRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  let read = 0;
  while (read < segmentation.len) {
    let text = segmentation.texts[read];
    let wordLike = segmentation.isWordLike[read];
    let kind = segmentation.kinds[read];
    let start = segmentation.starts[read];
    if (kind === "glue") {
      let glueText = text;
      const glueStart = start;
      read++;
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        glueText += segmentation.texts[read];
        read++;
      }
      if (read < segmentation.len && segmentation.kinds[read] === "text") {
        text = glueText + segmentation.texts[read];
        wordLike = segmentation.isWordLike[read];
        kind = "text";
        start = glueStart;
        read++;
      } else {
        texts.push(glueText);
        isWordLike.push(false);
        kinds.push("glue");
        starts.push(glueStart);
        continue;
      }
    } else {
      read++;
    }
    if (kind === "text") {
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        let glueText = "";
        while (read < segmentation.len && segmentation.kinds[read] === "glue") {
          glueText += segmentation.texts[read];
          read++;
        }
        if (read < segmentation.len && segmentation.kinds[read] === "text") {
          text += glueText + segmentation.texts[read];
          wordLike = wordLike || segmentation.isWordLike[read];
          read++;
          continue;
        }
        text += glueText;
      }
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(start);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function carryTrailingForwardStickyAcrossCJKBoundary(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < texts.length - 1; i++) {
    if (kinds[i] !== "text" || kinds[i + 1] !== "text")
      continue;
    if (!isCJK(texts[i]) || !isCJK(texts[i + 1]))
      continue;
    const split = splitTrailingForwardStickyCluster(texts[i]);
    if (split === null)
      continue;
    texts[i] = split.head;
    texts[i + 1] = split.tail + texts[i + 1];
    starts[i + 1] = starts[i] + split.head.length;
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function buildMergedSegmentation(normalized, profile, whiteSpaceProfile) {
  const wordSegmenter = getSharedWordSegmenter();
  let mergedLen = 0;
  const mergedTexts = [];
  const mergedWordLike = [];
  const mergedKinds = [];
  const mergedStarts = [];
  for (const s of wordSegmenter.segment(normalized)) {
    for (const piece of splitSegmentByBreakKind(s.segment, s.isWordLike ?? false, s.index, whiteSpaceProfile)) {
      const isText = piece.kind === "text";
      if (profile.carryCJKAfterClosingQuote && isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJK(piece.text) && isCJK(mergedTexts[mergedLen - 1]) && endsWithClosingQuote(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJKLineStartProhibitedSegment(piece.text) && isCJK(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && endsWithMyanmarMedialGlue(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.isWordLike && containsArabicScript(piece.text) && endsWithArabicNoSpacePunctuation(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = true;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.text.length === 1 && piece.text !== "-" && piece.text !== "\u2014" && isRepeatedSingleCharRun(mergedTexts[mergedLen - 1], piece.text)) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && (isLeftStickyPunctuationSegment(piece.text) || piece.text === "-" && mergedWordLike[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else {
        mergedTexts[mergedLen] = piece.text;
        mergedWordLike[mergedLen] = piece.isWordLike;
        mergedKinds[mergedLen] = piece.kind;
        mergedStarts[mergedLen] = piece.start;
        mergedLen++;
      }
    }
  }
  for (let i = 1; i < mergedLen; i++) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isEscapedQuoteClusterSegment(mergedTexts[i]) && mergedKinds[i - 1] === "text") {
      mergedTexts[i - 1] += mergedTexts[i];
      mergedWordLike[i - 1] = mergedWordLike[i - 1] || mergedWordLike[i];
      mergedTexts[i] = "";
    }
  }
  for (let i = mergedLen - 2; i >= 0; i--) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isForwardStickyClusterSegment(mergedTexts[i])) {
      let j = i + 1;
      while (j < mergedLen && mergedTexts[j] === "")
        j++;
      if (j < mergedLen && mergedKinds[j] === "text") {
        mergedTexts[j] = mergedTexts[i] + mergedTexts[j];
        mergedStarts[j] = mergedStarts[i];
        mergedTexts[i] = "";
      }
    }
  }
  let compactLen = 0;
  for (let read = 0; read < mergedLen; read++) {
    const text = mergedTexts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      mergedTexts[compactLen] = text;
      mergedWordLike[compactLen] = mergedWordLike[read];
      mergedKinds[compactLen] = mergedKinds[read];
      mergedStarts[compactLen] = mergedStarts[read];
    }
    compactLen++;
  }
  mergedTexts.length = compactLen;
  mergedWordLike.length = compactLen;
  mergedKinds.length = compactLen;
  mergedStarts.length = compactLen;
  const compacted = mergeGlueConnectedTextRuns({
    len: compactLen,
    texts: mergedTexts,
    isWordLike: mergedWordLike,
    kinds: mergedKinds,
    starts: mergedStarts
  });
  const withMergedUrls = carryTrailingForwardStickyAcrossCJKBoundary(mergeAsciiPunctuationChains(splitHyphenatedNumericRuns(mergeNumericRuns(mergeUrlQueryRuns(mergeUrlLikeRuns(compacted))))));
  for (let i = 0; i < withMergedUrls.len - 1; i++) {
    const split = splitLeadingSpaceAndMarks(withMergedUrls.texts[i]);
    if (split === null)
      continue;
    if (withMergedUrls.kinds[i] !== "space" && withMergedUrls.kinds[i] !== "preserved-space" || withMergedUrls.kinds[i + 1] !== "text" || !containsArabicScript(withMergedUrls.texts[i + 1])) {
      continue;
    }
    withMergedUrls.texts[i] = split.space;
    withMergedUrls.isWordLike[i] = false;
    withMergedUrls.kinds[i] = withMergedUrls.kinds[i] === "preserved-space" ? "preserved-space" : "space";
    withMergedUrls.texts[i + 1] = split.marks + withMergedUrls.texts[i + 1];
    withMergedUrls.starts[i + 1] = withMergedUrls.starts[i] + split.space.length;
  }
  return withMergedUrls;
}
function compileAnalysisChunks(segmentation, whiteSpaceProfile) {
  if (segmentation.len === 0)
    return [];
  if (!whiteSpaceProfile.preserveHardBreaks) {
    return [{
      startSegmentIndex: 0,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    }];
  }
  const chunks = [];
  let startSegmentIndex = 0;
  for (let i = 0; i < segmentation.len; i++) {
    if (segmentation.kinds[i] !== "hard-break")
      continue;
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: i,
      consumedEndSegmentIndex: i + 1
    });
    startSegmentIndex = i + 1;
  }
  if (startSegmentIndex < segmentation.len) {
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    });
  }
  return chunks;
}
function analyzeText(text, profile, whiteSpace = "normal") {
  const whiteSpaceProfile = getWhiteSpaceProfile(whiteSpace);
  const normalized = whiteSpaceProfile.mode === "pre-wrap" ? normalizeWhitespacePreWrap(text) : normalizeWhitespaceNormal(text);
  if (normalized.length === 0) {
    return {
      normalized,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: []
    };
  }
  const segmentation = buildMergedSegmentation(normalized, profile, whiteSpaceProfile);
  return {
    normalized,
    chunks: compileAnalysisChunks(segmentation, whiteSpaceProfile),
    ...segmentation
  };
}

// node_modules/@chenglou/pretext/dist/measurement.js
var measureContext = null;
var segmentMetricCaches = /* @__PURE__ */ new Map();
var cachedEngineProfile = null;
var emojiPresentationRe = /\p{Emoji_Presentation}/u;
var maybeEmojiRe = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
var sharedGraphemeSegmenter = null;
var emojiCorrectionCache = /* @__PURE__ */ new Map();
function getMeasureContext() {
  if (measureContext !== null)
    return measureContext;
  if (typeof OffscreenCanvas !== "undefined") {
    measureContext = new OffscreenCanvas(1, 1).getContext("2d");
    return measureContext;
  }
  if (typeof document !== "undefined") {
    measureContext = document.createElement("canvas").getContext("2d");
    return measureContext;
  }
  throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
}
function getSegmentMetricCache(font) {
  let cache = segmentMetricCaches.get(font);
  if (!cache) {
    cache = /* @__PURE__ */ new Map();
    segmentMetricCaches.set(font, cache);
  }
  return cache;
}
function getSegmentMetrics(seg, cache) {
  let metrics = cache.get(seg);
  if (metrics === void 0) {
    const ctx = getMeasureContext();
    metrics = {
      width: ctx.measureText(seg).width,
      containsCJK: isCJK(seg)
    };
    cache.set(seg, metrics);
  }
  return metrics;
}
function getEngineProfile() {
  if (cachedEngineProfile !== null)
    return cachedEngineProfile;
  if (typeof navigator === "undefined") {
    cachedEngineProfile = {
      lineFitEpsilon: 5e-3,
      carryCJKAfterClosingQuote: false,
      preferPrefixWidthsForBreakableRuns: false,
      preferEarlySoftHyphenBreak: false
    };
    return cachedEngineProfile;
  }
  const ua = navigator.userAgent;
  const vendor = navigator.vendor;
  const isSafari = vendor === "Apple Computer, Inc." && ua.includes("Safari/") && !ua.includes("Chrome/") && !ua.includes("Chromium/") && !ua.includes("CriOS/") && !ua.includes("FxiOS/") && !ua.includes("EdgiOS/");
  const isChromium = ua.includes("Chrome/") || ua.includes("Chromium/") || ua.includes("CriOS/") || ua.includes("Edg/");
  cachedEngineProfile = {
    lineFitEpsilon: isSafari ? 1 / 64 : 5e-3,
    carryCJKAfterClosingQuote: isChromium,
    preferPrefixWidthsForBreakableRuns: isSafari,
    preferEarlySoftHyphenBreak: isSafari
  };
  return cachedEngineProfile;
}
function parseFontSize(font) {
  const m = font.match(/(\d+(?:\.\d+)?)\s*px/);
  return m ? parseFloat(m[1]) : 16;
}
function getSharedGraphemeSegmenter() {
  if (sharedGraphemeSegmenter === null) {
    sharedGraphemeSegmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter;
}
function isEmojiGrapheme(g) {
  return emojiPresentationRe.test(g) || g.includes("\uFE0F");
}
function textMayContainEmoji(text) {
  return maybeEmojiRe.test(text);
}
function getEmojiCorrection(font, fontSize) {
  let correction = emojiCorrectionCache.get(font);
  if (correction !== void 0)
    return correction;
  const ctx = getMeasureContext();
  ctx.font = font;
  const canvasW = ctx.measureText("\u{1F600}").width;
  correction = 0;
  if (canvasW > fontSize + 0.5 && typeof document !== "undefined" && document.body !== null) {
    const span = document.createElement("span");
    span.style.font = font;
    span.style.display = "inline-block";
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.textContent = "\u{1F600}";
    document.body.appendChild(span);
    const domW = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    if (canvasW - domW > 0.5) {
      correction = canvasW - domW;
    }
  }
  emojiCorrectionCache.set(font, correction);
  return correction;
}
function countEmojiGraphemes(text) {
  let count = 0;
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const g of graphemeSegmenter.segment(text)) {
    if (isEmojiGrapheme(g.segment))
      count++;
  }
  return count;
}
function getEmojiCount(seg, metrics) {
  if (metrics.emojiCount === void 0) {
    metrics.emojiCount = countEmojiGraphemes(seg);
  }
  return metrics.emojiCount;
}
function getCorrectedSegmentWidth(seg, metrics, emojiCorrection) {
  if (emojiCorrection === 0)
    return metrics.width;
  return metrics.width - getEmojiCount(seg, metrics) * emojiCorrection;
}
function getSegmentGraphemeWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemeWidths !== void 0)
    return metrics.graphemeWidths;
  const widths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const gs of graphemeSegmenter.segment(seg)) {
    const graphemeMetrics = getSegmentMetrics(gs.segment, cache);
    widths.push(getCorrectedSegmentWidth(gs.segment, graphemeMetrics, emojiCorrection));
  }
  metrics.graphemeWidths = widths.length > 1 ? widths : null;
  return metrics.graphemeWidths;
}
function getSegmentGraphemePrefixWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemePrefixWidths !== void 0)
    return metrics.graphemePrefixWidths;
  const prefixWidths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  let prefix = "";
  for (const gs of graphemeSegmenter.segment(seg)) {
    prefix += gs.segment;
    const prefixMetrics = getSegmentMetrics(prefix, cache);
    prefixWidths.push(getCorrectedSegmentWidth(prefix, prefixMetrics, emojiCorrection));
  }
  metrics.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
  return metrics.graphemePrefixWidths;
}
function getFontMeasurementState(font, needsEmojiCorrection) {
  const ctx = getMeasureContext();
  ctx.font = font;
  const cache = getSegmentMetricCache(font);
  const fontSize = parseFontSize(font);
  const emojiCorrection = needsEmojiCorrection ? getEmojiCorrection(font, fontSize) : 0;
  return { cache, fontSize, emojiCorrection };
}

// node_modules/@chenglou/pretext/dist/line-break.js
function canBreakAfter(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "tab" || kind === "zero-width-break" || kind === "soft-hyphen";
}
function isSimpleCollapsibleSpace(kind) {
  return kind === "space";
}
function getTabAdvance(lineWidth, tabStopAdvance) {
  if (tabStopAdvance <= 0)
    return 0;
  const remainder = lineWidth % tabStopAdvance;
  if (Math.abs(remainder) <= 1e-6)
    return tabStopAdvance;
  return tabStopAdvance - remainder;
}
function getBreakableAdvance(graphemeWidths, graphemePrefixWidths, graphemeIndex, preferPrefixWidths) {
  if (!preferPrefixWidths || graphemePrefixWidths === null) {
    return graphemeWidths[graphemeIndex];
  }
  return graphemePrefixWidths[graphemeIndex] - (graphemeIndex > 0 ? graphemePrefixWidths[graphemeIndex - 1] : 0);
}
function fitSoftHyphenBreak(graphemeWidths, initialWidth, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, cumulativeWidths) {
  let fitCount = 0;
  let fittedWidth = initialWidth;
  while (fitCount < graphemeWidths.length) {
    const nextWidth = cumulativeWidths ? initialWidth + graphemeWidths[fitCount] : fittedWidth + graphemeWidths[fitCount];
    const nextLineWidth = fitCount + 1 < graphemeWidths.length ? nextWidth + discretionaryHyphenWidth : nextWidth;
    if (nextLineWidth > maxWidth + lineFitEpsilon)
      break;
    fittedWidth = nextWidth;
    fitCount++;
  }
  return { fitCount, fittedWidth };
}
function countPreparedLines(prepared, maxWidth) {
  if (prepared.simpleLineWalkFastPath) {
    return countPreparedLinesSimple(prepared, maxWidth);
  }
  return walkPreparedLines(prepared, maxWidth);
}
function countPreparedLinesSimple(prepared, maxWidth) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  if (widths.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  function placeOnFreshLine(segmentIndex) {
    const w = widths[segmentIndex];
    if (w > maxWidth && breakableWidths[segmentIndex] !== null) {
      const gWidths = breakableWidths[segmentIndex];
      const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
      lineW = 0;
      for (let g = 0; g < gWidths.length; g++) {
        const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
        if (lineW > 0 && lineW + gw > maxWidth + lineFitEpsilon) {
          lineCount++;
          lineW = gw;
        } else {
          if (lineW === 0)
            lineCount++;
          lineW += gw;
        }
      }
    } else {
      lineW = w;
      lineCount++;
    }
    hasContent = true;
  }
  for (let i = 0; i < widths.length; i++) {
    const w = widths[i];
    const kind = kinds[i];
    if (!hasContent) {
      placeOnFreshLine(i);
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (isSimpleCollapsibleSpace(kind))
        continue;
      lineW = 0;
      hasContent = false;
      placeOnFreshLine(i);
      continue;
    }
    lineW = newW;
  }
  if (!hasContent)
    return lineCount + 1;
  return lineCount;
}
function walkPreparedLinesSimple(prepared, maxWidth, onLine) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  if (widths.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakPaintWidth = 0;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  let i = 0;
  while (i < widths.length) {
    const w = widths[i];
    const kind = kinds[i];
    if (!hasContent) {
      if (w > maxWidth && breakableWidths[i] !== null) {
        appendBreakableSegment(i);
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      i++;
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        emitCurrentLine(i + 1, 0, lineW - w);
        i++;
        continue;
      }
      if (pendingBreakSegmentIndex >= 0) {
        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
        continue;
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        emitCurrentLine();
        appendBreakableSegment(i);
        i++;
        continue;
      }
      emitCurrentLine();
      continue;
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
    i++;
  }
  if (hasContent)
    emitCurrentLine();
  return lineCount;
}
function walkPreparedLines(prepared, maxWidth, onLine) {
  if (prepared.simpleLineWalkFastPath) {
    return walkPreparedLinesSimple(prepared, maxWidth, onLine);
  }
  const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance, chunks } = prepared;
  if (widths.length === 0 || chunks.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  function continueSoftHyphenBreakableSegment(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen")
      return false;
    const gWidths = breakableWidths[segmentIndex];
    if (gWidths === null)
      return false;
    const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
    const usesPrefixWidths = fitWidths !== gWidths;
    const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
    if (fitCount === 0)
      return false;
    lineW = fittedWidth;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = fitCount;
    clearPendingBreak();
    if (fitCount === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
      return true;
    }
    emitCurrentLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
    appendBreakableSegmentFrom(segmentIndex, fitCount);
    return true;
  }
  function emitEmptyChunk(chunk) {
    lineCount++;
    onLine?.({
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    });
    clearPendingBreak();
  }
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
      emitEmptyChunk(chunk);
      continue;
    }
    hasContent = false;
    lineW = 0;
    lineStartSegmentIndex = chunk.startSegmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = chunk.startSegmentIndex;
    lineEndGraphemeIndex = 0;
    clearPendingBreak();
    let i = chunk.startSegmentIndex;
    while (i < chunk.endSegmentIndex) {
      const kind = kinds[i];
      const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
      if (kind === "soft-hyphen") {
        if (hasContent) {
          lineEndSegmentIndex = i + 1;
          lineEndGraphemeIndex = 0;
          pendingBreakSegmentIndex = i + 1;
          pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
          pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
          pendingBreakKind = kind;
        }
        i++;
        continue;
      }
      if (!hasContent) {
        if (w > maxWidth && breakableWidths[i] !== null) {
          appendBreakableSegment(i);
        } else {
          startLineAtSegment(i, w);
        }
        updatePendingBreakForWholeSegment(i, w);
        i++;
        continue;
      }
      const newW = lineW + w;
      if (newW > maxWidth + lineFitEpsilon) {
        const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
        const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
        if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (pendingBreakKind === "soft-hyphen" && continueSoftHyphenBreakableSegment(i)) {
          i++;
          continue;
        }
        if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
          appendWholeSegment(i, w);
          emitCurrentLine(i + 1, 0, currentBreakPaintWidth);
          i++;
          continue;
        }
        if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (w > maxWidth && breakableWidths[i] !== null) {
          emitCurrentLine();
          appendBreakableSegment(i);
          i++;
          continue;
        }
        emitCurrentLine();
        continue;
      }
      appendWholeSegment(i, w);
      updatePendingBreakForWholeSegment(i, w);
      i++;
    }
    if (hasContent) {
      const finalPaintWidth = pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex ? pendingBreakPaintWidth : lineW;
      emitCurrentLine(chunk.consumedEndSegmentIndex, 0, finalPaintWidth);
    }
  }
  return lineCount;
}

// node_modules/@chenglou/pretext/dist/layout.js
var sharedGraphemeSegmenter2 = null;
var sharedLineTextCaches = /* @__PURE__ */ new WeakMap();
function getSharedGraphemeSegmenter2() {
  if (sharedGraphemeSegmenter2 === null) {
    sharedGraphemeSegmenter2 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter2;
}
function createEmptyPrepared(includeSegments) {
  if (includeSegments) {
    return {
      widths: [],
      lineEndFitAdvances: [],
      lineEndPaintAdvances: [],
      kinds: [],
      simpleLineWalkFastPath: true,
      segLevels: null,
      breakableWidths: [],
      breakablePrefixWidths: [],
      discretionaryHyphenWidth: 0,
      tabStopAdvance: 0,
      chunks: [],
      segments: []
    };
  }
  return {
    widths: [],
    lineEndFitAdvances: [],
    lineEndPaintAdvances: [],
    kinds: [],
    simpleLineWalkFastPath: true,
    segLevels: null,
    breakableWidths: [],
    breakablePrefixWidths: [],
    discretionaryHyphenWidth: 0,
    tabStopAdvance: 0,
    chunks: []
  };
}
function measureAnalysis(analysis, font, includeSegments) {
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  const engineProfile = getEngineProfile();
  const { cache, emojiCorrection } = getFontMeasurementState(font, textMayContainEmoji(analysis.normalized));
  const discretionaryHyphenWidth = getCorrectedSegmentWidth("-", getSegmentMetrics("-", cache), emojiCorrection);
  const spaceWidth = getCorrectedSegmentWidth(" ", getSegmentMetrics(" ", cache), emojiCorrection);
  const tabStopAdvance = spaceWidth * 8;
  if (analysis.len === 0)
    return createEmptyPrepared(includeSegments);
  const widths = [];
  const lineEndFitAdvances = [];
  const lineEndPaintAdvances = [];
  const kinds = [];
  let simpleLineWalkFastPath = analysis.chunks.length <= 1;
  const segStarts = includeSegments ? [] : null;
  const breakableWidths = [];
  const breakablePrefixWidths = [];
  const segments = includeSegments ? [] : null;
  const preparedStartByAnalysisIndex = Array.from({ length: analysis.len });
  const preparedEndByAnalysisIndex = Array.from({ length: analysis.len });
  function pushMeasuredSegment(text, width, lineEndFitAdvance, lineEndPaintAdvance, kind, start, breakable, breakablePrefix) {
    if (kind !== "text" && kind !== "space" && kind !== "zero-width-break") {
      simpleLineWalkFastPath = false;
    }
    widths.push(width);
    lineEndFitAdvances.push(lineEndFitAdvance);
    lineEndPaintAdvances.push(lineEndPaintAdvance);
    kinds.push(kind);
    segStarts?.push(start);
    breakableWidths.push(breakable);
    breakablePrefixWidths.push(breakablePrefix);
    if (segments !== null)
      segments.push(text);
  }
  for (let mi = 0; mi < analysis.len; mi++) {
    preparedStartByAnalysisIndex[mi] = widths.length;
    const segText = analysis.texts[mi];
    const segWordLike = analysis.isWordLike[mi];
    const segKind = analysis.kinds[mi];
    const segStart = analysis.starts[mi];
    if (segKind === "soft-hyphen") {
      pushMeasuredSegment(segText, 0, discretionaryHyphenWidth, discretionaryHyphenWidth, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "hard-break") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "tab") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const segMetrics = getSegmentMetrics(segText, cache);
    if (segKind === "text" && segMetrics.containsCJK) {
      let unitText = "";
      let unitStart = 0;
      for (const gs of graphemeSegmenter.segment(segText)) {
        const grapheme = gs.segment;
        if (unitText.length === 0) {
          unitText = grapheme;
          unitStart = gs.index;
          continue;
        }
        if (kinsokuEnd.has(unitText) || kinsokuStart.has(grapheme) || leftStickyPunctuation.has(grapheme) || engineProfile.carryCJKAfterClosingQuote && isCJK(grapheme) && endsWithClosingQuote(unitText)) {
          unitText += grapheme;
          continue;
        }
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
        unitText = grapheme;
        unitStart = gs.index;
      }
      if (unitText.length > 0) {
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
      }
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const w = getCorrectedSegmentWidth(segText, segMetrics, emojiCorrection);
    const lineEndFitAdvance = segKind === "space" || segKind === "preserved-space" || segKind === "zero-width-break" ? 0 : w;
    const lineEndPaintAdvance = segKind === "space" || segKind === "zero-width-break" ? 0 : w;
    if (segWordLike && segText.length > 1) {
      const graphemeWidths = getSegmentGraphemeWidths(segText, segMetrics, cache, emojiCorrection);
      const graphemePrefixWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? getSegmentGraphemePrefixWidths(segText, segMetrics, cache, emojiCorrection) : null;
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, graphemeWidths, graphemePrefixWidths);
    } else {
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, null, null);
    }
    preparedEndByAnalysisIndex[mi] = widths.length;
  }
  const chunks = mapAnalysisChunksToPreparedChunks(analysis.chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex);
  const segLevels = segStarts === null ? null : computeSegmentLevels(analysis.normalized, segStarts);
  if (segments !== null) {
    return {
      widths,
      lineEndFitAdvances,
      lineEndPaintAdvances,
      kinds,
      simpleLineWalkFastPath,
      segLevels,
      breakableWidths,
      breakablePrefixWidths,
      discretionaryHyphenWidth,
      tabStopAdvance,
      chunks,
      segments
    };
  }
  return {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    simpleLineWalkFastPath,
    segLevels,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks
  };
}
function mapAnalysisChunksToPreparedChunks(chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex) {
  const preparedChunks = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const startSegmentIndex = chunk.startSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.startSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const endSegmentIndex = chunk.endSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.endSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const consumedEndSegmentIndex = chunk.consumedEndSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.consumedEndSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    preparedChunks.push({
      startSegmentIndex,
      endSegmentIndex,
      consumedEndSegmentIndex
    });
  }
  return preparedChunks;
}
function prepareInternal(text, font, includeSegments, options) {
  const analysis = analyzeText(text, getEngineProfile(), options?.whiteSpace);
  return measureAnalysis(analysis, font, includeSegments);
}
function prepare(text, font, options) {
  return prepareInternal(text, font, false, options);
}
function prepareWithSegments(text, font, options) {
  return prepareInternal(text, font, true, options);
}
function getInternalPrepared(prepared) {
  return prepared;
}
function layout(prepared, maxWidth, lineHeight) {
  const lineCount = countPreparedLines(getInternalPrepared(prepared), maxWidth);
  return { lineCount, height: lineCount * lineHeight };
}
function getSegmentGraphemes(segmentIndex, segments, cache) {
  let graphemes = cache.get(segmentIndex);
  if (graphemes !== void 0)
    return graphemes;
  graphemes = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  for (const gs of graphemeSegmenter.segment(segments[segmentIndex])) {
    graphemes.push(gs.segment);
  }
  cache.set(segmentIndex, graphemes);
  return graphemes;
}
function getLineTextCache(prepared) {
  let cache = sharedLineTextCaches.get(prepared);
  if (cache !== void 0)
    return cache;
  cache = /* @__PURE__ */ new Map();
  sharedLineTextCaches.set(prepared, cache);
  return cache;
}
function lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex) {
  return endSegmentIndex > 0 && kinds[endSegmentIndex - 1] === "soft-hyphen" && !(startSegmentIndex === endSegmentIndex && startGraphemeIndex > 0);
}
function buildLineTextFromRange(segments, kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  let text = "";
  const endsWithDiscretionaryHyphen = lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex);
  for (let i = startSegmentIndex; i < endSegmentIndex; i++) {
    if (kinds[i] === "soft-hyphen" || kinds[i] === "hard-break")
      continue;
    if (i === startSegmentIndex && startGraphemeIndex > 0) {
      text += getSegmentGraphemes(i, segments, cache).slice(startGraphemeIndex).join("");
    } else {
      text += segments[i];
    }
  }
  if (endGraphemeIndex > 0) {
    if (endsWithDiscretionaryHyphen)
      text += "-";
    text += getSegmentGraphemes(endSegmentIndex, segments, cache).slice(startSegmentIndex === endSegmentIndex ? startGraphemeIndex : 0, endGraphemeIndex).join("");
  } else if (endsWithDiscretionaryHyphen) {
    text += "-";
  }
  return text;
}
function createLayoutLine(prepared, cache, width, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  return {
    text: buildLineTextFromRange(prepared.segments, prepared.kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex),
    width,
    start: {
      segmentIndex: startSegmentIndex,
      graphemeIndex: startGraphemeIndex
    },
    end: {
      segmentIndex: endSegmentIndex,
      graphemeIndex: endGraphemeIndex
    }
  };
}
function materializeLayoutLine(prepared, cache, line) {
  return createLayoutLine(prepared, cache, line.width, line.startSegmentIndex, line.startGraphemeIndex, line.endSegmentIndex, line.endGraphemeIndex);
}
function layoutWithLines(prepared, maxWidth, lineHeight) {
  const lines = [];
  if (prepared.widths.length === 0)
    return { lineCount: 0, height: 0, lines };
  const graphemeCache = getLineTextCache(prepared);
  const lineCount = walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    lines.push(materializeLayoutLine(prepared, graphemeCache, line));
  });
  return { lineCount, height: lineCount * lineHeight, lines };
}

// main.js
var tabBtns = document.querySelectorAll(".tab-btn");
var tabContents = document.querySelectorAll(".tab-content");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});
function fmtMs(ms) {
  if (ms < 0.01) return "<0.01ms";
  return ms.toFixed(3) + "ms";
}
function fmtPx(n) {
  return n.toFixed(2) + "px";
}
var pgText = document.getElementById("pg-text");
var pgFontSize = document.getElementById("pg-fontsize");
var pgFontSizeVal = document.getElementById("pg-fontsize-val");
var pgWidth = document.getElementById("pg-width");
var pgWidthVal = document.getElementById("pg-width-val");
var pgLh = document.getElementById("pg-lh");
var pgLhVal = document.getElementById("pg-lh-val");
var pgPredHeight = document.getElementById("pg-pred-height");
var pgPredLines = document.getElementById("pg-pred-lines");
var pgPredPrep = document.getElementById("pg-pred-prep");
var pgPredLayout = document.getElementById("pg-pred-layout");
var pgPredViz = document.getElementById("pg-pred-viz");
var pgDomHeight = document.getElementById("pg-dom-height");
var pgDelta = document.getElementById("pg-delta");
var pgDomTime = document.getElementById("pg-dom-time");
var pgDomRender = document.getElementById("pg-dom-render");
function updatePlayground() {
  const text = pgText.value;
  const fontSize = parseInt(pgFontSize.value, 10);
  const containerWidth = parseInt(pgWidth.value, 10);
  const lineHeightMultiplier = parseInt(pgLh.value, 10) / 10;
  const lineHeight = fontSize * lineHeightMultiplier;
  const font = `${fontSize}px Inter`;
  pgFontSizeVal.textContent = fontSize + "px";
  pgWidthVal.textContent = containerWidth + "px";
  pgLhVal.textContent = lineHeightMultiplier.toFixed(1);
  const t0 = performance.now();
  const handle = prepare(text, font);
  const t1 = performance.now();
  const result = layout(handle, containerWidth, lineHeight);
  const t2 = performance.now();
  pgPredHeight.textContent = fmtPx(result.height);
  pgPredLines.textContent = result.lineCount;
  pgPredPrep.textContent = fmtMs(t1 - t0);
  pgPredLayout.textContent = fmtMs(t2 - t1);
  pgPredViz.style.width = containerWidth + "px";
  pgPredViz.style.height = result.height + "px";
  pgPredViz.style.maxWidth = "100%";
  pgDomRender.style.width = containerWidth + "px";
  pgDomRender.style.fontSize = fontSize + "px";
  pgDomRender.style.lineHeight = lineHeightMultiplier;
  pgDomRender.style.fontFamily = "Inter, system-ui, sans-serif";
  pgDomRender.textContent = text;
  const t3 = performance.now();
  const bcr = pgDomRender.getBoundingClientRect();
  const t4 = performance.now();
  const domH = bcr.height;
  pgDomHeight.textContent = fmtPx(domH);
  pgDomTime.textContent = fmtMs(t4 - t3);
  const delta = Math.abs(result.height - domH);
  pgDelta.textContent = fmtPx(delta);
  pgDelta.className = "metric-val " + (delta < 2 ? "good" : delta < 5 ? "warn" : "");
}
pgText.addEventListener("input", updatePlayground);
pgFontSize.addEventListener("input", updatePlayground);
pgWidth.addEventListener("input", updatePlayground);
pgLh.addEventListener("input", updatePlayground);
updatePlayground();
var resizeBox = document.getElementById("resize-box");
var RESIZE_TEXT = resizeBox.textContent.trim();
var RESIZE_FONT = "15px Inter";
var resizePrepared = prepare(RESIZE_TEXT, RESIZE_FONT);
var resizeCount = 0;
var pretextTimes = [];
var domTimes = [];
var tPretext = document.getElementById("t-pretext");
var tDom = document.getElementById("t-dom");
var tW = document.getElementById("t-w");
var tPredH = document.getElementById("t-pred-h");
var tDomH = document.getElementById("t-dom-h");
var tCount = document.getElementById("t-count");
var tAvgPretext = document.getElementById("t-avg-pretext");
var tAvgDom = document.getElementById("t-avg-dom");
var ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width } = entry.contentRect;
    const p0 = performance.now();
    const lh = 15 * 1.6;
    const presult = layout(resizePrepared, width, lh);
    const p1 = performance.now();
    const pretextMs = p1 - p0;
    const d0 = performance.now();
    const bcr = resizeBox.getBoundingClientRect();
    const d1 = performance.now();
    const domMs = d1 - d0;
    pretextTimes.push(pretextMs);
    domTimes.push(domMs);
    resizeCount++;
    tPretext.textContent = fmtMs(pretextMs);
    tDom.textContent = fmtMs(domMs);
    tW.textContent = Math.round(width) + "px";
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
var WORDS = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
  "typography",
  "renders",
  "beautiful",
  "layout",
  "text",
  "measurement",
  "canvas",
  "performance",
  "browser",
  "reflow",
  "bidi",
  "unicode",
  "segment",
  "grapheme",
  "pretext",
  "library",
  "demo",
  "interactive",
  "virtual",
  "scroll",
  "list",
  "masonry",
  "height",
  "predict",
  "algorithm",
  "efficient",
  "fast",
  "modern",
  "web",
  "font",
  "size",
  "container",
  "width",
  "line",
  "break",
  "wrap",
  "CJK",
  "emoji",
  "spring",
  "\u4E2D\u6587",
  "\u65E5\u672C\u8A9E",
  "\uD55C\uAD6D\uC5B4",
  "\xD1o\xF1o",
  "caf\xE9",
  "\xFCber"
];
function randomSentence(minWords, maxWords) {
  const count = minWords + Math.floor(Math.random() * (maxWords - minWords));
  const words = [];
  for (let i = 0; i < count; i++) {
    words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }
  const s = words.join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
}
var ITEM_COUNT = 500;
var VLIST_FONT = "14px Inter";
var VLIST_LH_MULT = 1.6;
var vlistContainer = document.getElementById("vlist-container");
var vlistSpacer = document.getElementById("vlist-spacer");
var vlistViewport = document.getElementById("vlist-viewport");
var vlMeasured = document.getElementById("vl-measured");
var vlMtime = document.getElementById("vl-mtime");
var vlVisible = document.getElementById("vl-visible");
var fpsVal = document.getElementById("fps-val");
var vlistItems = [];
var vlistOffsets = [];
var vlistHeights = [];
var vlistTotalHeight = 0;
var vlistInitialized = false;
function initVirtualList() {
  if (vlistInitialized) return;
  vlistInitialized = true;
  const texts = [];
  for (let i = 0; i < ITEM_COUNT; i++) {
    texts.push(randomSentence(8, 60));
  }
  vlistItems = texts;
  const containerWidth = vlistContainer.clientWidth - 40;
  const fontSize = 14;
  const lineHeight = fontSize * VLIST_LH_MULT;
  const t0 = performance.now();
  const handles = texts.map((t) => prepare(t, VLIST_FONT));
  const results = handles.map((h) => layout(h, containerWidth, lineHeight));
  const t1 = performance.now();
  vlistHeights = results.map((r) => r.height + 24 + 4 + 16);
  vlistOffsets = new Array(ITEM_COUNT + 1);
  vlistOffsets[0] = 0;
  for (let i = 0; i < ITEM_COUNT; i++) {
    vlistOffsets[i + 1] = vlistOffsets[i] + vlistHeights[i];
  }
  vlistTotalHeight = vlistOffsets[ITEM_COUNT];
  vlistSpacer.style.height = vlistTotalHeight + "px";
  vlMeasured.textContent = ITEM_COUNT;
  vlMtime.textContent = fmtMs(t1 - t0);
  renderVirtualList();
}
function findFirstVisible(scrollTop) {
  let lo = 0, hi = ITEM_COUNT - 1;
  while (lo < hi) {
    const mid = lo + hi >> 1;
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
  const count = end - start + 1;
  while (vlistViewport.children.length > count) {
    vlistViewport.removeChild(vlistViewport.lastChild);
  }
  while (vlistViewport.children.length < count) {
    const el = document.createElement("div");
    el.className = "vlist-item";
    vlistViewport.appendChild(el);
  }
  for (let i = start; i <= end; i++) {
    const el = vlistViewport.children[i - start];
    el.style.height = vlistHeights[i] + "px";
    el.innerHTML = `<div class="item-idx">#${i + 1}</div>${vlistItems[i]}`;
  }
  vlVisible.textContent = count;
}
vlistContainer.addEventListener("scroll", renderVirtualList, { passive: true });
var fpsFrameCount = 0;
var fpsLastTime = performance.now();
function fpsTick() {
  fpsFrameCount++;
  const now = performance.now();
  if (now - fpsLastTime >= 1e3) {
    fpsVal.textContent = fpsFrameCount;
    fpsFrameCount = 0;
    fpsLastTime = now;
  }
  requestAnimationFrame(fpsTick);
}
requestAnimationFrame(fpsTick);
document.querySelector('[data-tab="vlist"]').addEventListener("click", () => {
  setTimeout(initVirtualList, 50);
});
var LANG_SAMPLES = [
  {
    lang: "English",
    tag: "EN",
    text: "Typography is the art of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, and letter-spacing."
  },
  {
    lang: "Chinese (Simplified)",
    tag: "ZH",
    text: "\u6625\u5929\u5230\u4E86\uFF0C\u4E07\u7269\u590D\u82CF\u3002\u5C0F\u9E1F\u5728\u679D\u5934\u6B4C\u5531\uFF0C\u82B1\u6735\u5728\u9633\u5149\u4E0B\u7EFD\u653E\u3002\u5B69\u5B50\u4EEC\u5728\u516C\u56ED\u91CC\u5FEB\u4E50\u5730\u5954\u8DD1\uFF0C\u8001\u4EBA\u4EEC\u5728\u6811\u836B\u4E0B\u60A0\u95F2\u5730\u804A\u5929\u3002\u8FD9\u7F8E\u4E3D\u7684\u5B63\u8282\u8BA9\u4EBA\u5FC3\u65F7\u795E\u6021\uFF0C\u5145\u6EE1\u4E86\u751F\u673A\u4E0E\u6D3B\u529B\u3002"
  },
  {
    lang: "Arabic (RTL)",
    tag: "AR",
    text: "\u0628\u062F\u0623\u062A \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0641\u064A \u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u0648\u0627\u0633\u0639\u0629. \u0643\u0627\u0646 \u0627\u0644\u0647\u0648\u0627\u0621 \u062C\u0627\u0641\u0627\u064B \u0648\u0627\u0644\u0634\u0645\u0633 \u0633\u0627\u0637\u0639\u0629. \u0633\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0641\u0631 \u0628\u062E\u0637\u0649 \u062B\u0627\u0628\u062A\u0629 \u0646\u062D\u0648 \u0627\u0644\u0623\u0641\u0642 \u0627\u0644\u0628\u0639\u064A\u062F\u060C \u064A\u062D\u0645\u0644 \u0641\u064A \u0642\u0644\u0628\u0647 \u0623\u0645\u0644\u0627\u064B \u0643\u0628\u064A\u0631\u0627\u064B \u0648\u064A\u0633\u0639\u0649 \u0646\u062D\u0648 \u0647\u062F\u0641\u0647 \u0627\u0644\u0645\u0646\u0634\u0648\u062F."
  },
  {
    lang: "Japanese",
    tag: "JA",
    text: "\u685C\u306E\u82B1\u3073\u3089\u304C\u98A8\u306B\u821E\u3046\u3002\u6625\u306E\u8A2A\u308C\u3068\u3068\u3082\u306B\u3001\u8857\u5168\u4F53\u304C\u6DE1\u3044\u30D4\u30F3\u30AF\u8272\u306B\u67D3\u307E\u3063\u3066\u3044\u304F\u3002\u4EBA\u3005\u306F\u516C\u5712\u306B\u96C6\u307E\u308A\u3001\u82B1\u898B\u3092\u697D\u3057\u3093\u3067\u3044\u308B\u3002\u3053\u306E\u7F8E\u3057\u3044\u5B63\u7BC0\u306F\u3001\u65E5\u672C\u306E\u6587\u5316\u306B\u304A\u3044\u3066\u7279\u5225\u306A\u610F\u5473\u3092\u6301\u3063\u3066\u3044\u308B\u3002"
  },
  {
    lang: "Emoji & Mixed",
    tag: "\u{1F30D}",
    text: "\u{1F338} Spring is here! \u{1F33F} Nature is blooming \u{1F33A} with colors \u{1F3A8} everywhere. The sun \u2600\uFE0F shines bright \u{1F4A1} and birds \u{1F98B} sing \u{1F3B5} beautiful melodies. Life is amazing! \u{1F525}\u2728\u{1F389}\u{1F308}"
  },
  {
    lang: "Mixed CJK + Latin",
    tag: "MX",
    text: "Pretext supports mixed scripts: \u4F60\u597D Hello \u3053\u3093\u306B\u3061\u306F \uC548\uB155\uD558\uC138\uC694 \u2014 all in one paragraph. The library handles bidirectional text and CJK line-breaking rules automatically for beautiful typography."
  }
];
var LANG_FONT = "16px Inter";
var LANG_WIDTH = 320;
var LANG_LH = 16 * 1.6;
function initMultiLang() {
  const grid = document.getElementById("lang-grid");
  if (grid.children.length > 0) return;
  LANG_SAMPLES.forEach((sample) => {
    const t0 = performance.now();
    const handle = prepare(sample.text, LANG_FONT);
    const t1 = performance.now();
    const result = layout(handle, LANG_WIDTH, LANG_LH);
    const t2 = performance.now();
    const card = document.createElement("div");
    card.className = "lang-card";
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
document.querySelector('[data-tab="multilang"]').addEventListener("click", () => {
  setTimeout(initMultiLang, 50);
});
var lwText = document.getElementById("lw-text");
var lwWidth = document.getElementById("lw-width");
var lwWidthVal = document.getElementById("lw-width-val");
var lwFontSize = document.getElementById("lw-fontsize");
var lwFontSizeVal = document.getElementById("lw-fontsize-val");
var lwLineCount = document.getElementById("lw-linecount");
var lwTime = document.getElementById("lw-time");
var lineOutput = document.getElementById("line-output");
function updateLineRendering() {
  const text = lwText.value;
  const containerWidth = parseInt(lwWidth.value, 10);
  const fontSize = parseInt(lwFontSize.value, 10);
  const font = `${fontSize}px Inter`;
  const lineHeight = fontSize * 1.5;
  lwWidthVal.textContent = containerWidth + "px";
  lwFontSizeVal.textContent = fontSize + "px";
  const t0 = performance.now();
  const prepared = prepareWithSegments(text, font);
  const { lines, lineCount } = layoutWithLines(prepared, containerWidth, lineHeight);
  const t1 = performance.now();
  lwLineCount.textContent = lineCount;
  lwTime.textContent = fmtMs(t1 - t0);
  lineOutput.innerHTML = "";
  lines.forEach((line, i) => {
    const el = document.createElement("span");
    el.className = "rendered-line";
    el.style.fontSize = fontSize + "px";
    el.style.lineHeight = lineHeight + "px";
    el.style.maxWidth = containerWidth + "px";
    el.innerHTML = `<span class="line-meta">${String(i + 1).padStart(2, "0")} \xB7 ${line.width.toFixed(0)}px</span>${line.text || "\u200B"}`;
    lineOutput.appendChild(el);
  });
}
lwText.addEventListener("input", updateLineRendering);
lwWidth.addEventListener("input", updateLineRendering);
lwFontSize.addEventListener("input", updateLineRendering);
document.querySelector('[data-tab="linewise"]').addEventListener("click", () => {
  setTimeout(updateLineRendering, 50);
});
updateLineRendering();
