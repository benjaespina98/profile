// @ts-check
import { ES } from './i18n/es.js';

/** @typedef {'en' | 'es'} Lang */

const STORAGE_KEY = 'lang';
const TRANSLATED_ATTRS = ['aria-label', 'alt'];

/** English source of every node/attribute we have touched, so switching back is lossless. */
/** @type {WeakMap<Text, string>} */
const textSource = new WeakMap();
/** @type {WeakMap<Element, Record<string, string>>} */
const attrSource = new WeakMap();

/** @type {Lang} */
let current = 'en';

/** @param {string} value */
const normalize = value => value.replace(/\s+/g, ' ').trim();

/**
 * Translates a single UI string (for text created at runtime, e.g. toasts).
 * @param {string} english
 * @returns {string}
 */
export function t(english) {
  return current === 'es' ? (ES[english] ?? english) : english;
}

/** @returns {Lang} */
export function resolveLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  return navigator.languages?.some(l => l.toLowerCase().startsWith('es')) ? 'es' : 'en';
}

/**
 * Swaps a text value while keeping the original leading/trailing whitespace.
 * @param {string} source
 * @param {Lang} lang
 */
function translate(source, lang) {
  if (lang === 'en') return source;
  const translated = ES[normalize(source)];
  if (!translated) return source;
  const lead = source.match(/^\s*/)?.[0] ?? '';
  const trail = source.match(/\s*$/)?.[0] ?? '';
  return lead + translated + trail;
}

/** @param {Lang} lang */
function applyText(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: node =>
      node.parentElement?.closest('script, style, noscript') || !normalize(/** @type {Text} */ (node).data)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });

  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = /** @type {Text} */ (node);
    if (!textSource.has(text)) textSource.set(text, text.data);
    text.data = translate(textSource.get(text) ?? text.data, lang);
  }
}

/** @param {Lang} lang */
function applyAttributes(lang) {
  for (const attr of TRANSLATED_ATTRS) {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      const sources = attrSource.get(el) ?? {};
      sources[attr] ??= el.getAttribute(attr) ?? '';
      attrSource.set(el, sources);
      el.setAttribute(attr, translate(sources[attr], lang));
    });
  }
}

/** @param {Lang} lang */
function applyDocument(lang) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    const source = meta.getAttribute('data-source') ?? meta.getAttribute('content') ?? '';
    meta.setAttribute('data-source', source);
    meta.setAttribute('content', translate(source, lang));
  }
  const title = document.documentElement.dataset.titleSource ?? document.title;
  document.documentElement.dataset.titleSource = title;
  document.title = translate(title, lang);
}

/** @param {Lang} lang */
function syncSwitches(lang) {
  document.querySelectorAll('[data-lang-switch] button[data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
  });
}

/**
 * @param {Lang} lang
 * @param {{ persist?: boolean }} [options]
 */
export function setLang(lang, { persist = true } = {}) {
  current = lang;
  document.documentElement.lang = lang;
  applyText(lang);
  applyAttributes(lang);
  applyDocument(lang);
  syncSwitches(lang);
  document.documentElement.classList.remove('i18n-pending');
  if (!persist) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Not persisting is fine; the choice still applies to this visit.
  }
}

/** Applies the resolved language and wires the EN/ES switch. */
export function initI18n() {
  document.querySelectorAll('[data-lang-switch] button[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === 'en' || lang === 'es') setLang(lang);
    });
  });
  setLang(resolveLang(), { persist: false });
}
