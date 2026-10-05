// Audits every page: local assets/links must exist and every #anchor must resolve.
// CV PDFs are reported as warnings (the picker degrades gracefully); anything else fails the run.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const pages = ['index.html', 'links/index.html'];
const usedStrings = new Set(['Email copied']); // runtime toast; everything else comes from the pages
const normalize = text => text.replace(/\s+/g, ' ').trim().replace(/&amp;/g, '&').replace(/&apos;|&#39;/g, "'");

const isRemote = ref => /^(?:[a-z]+:|\/\/)/i.test(ref);
const errors = [];
const warnings = [];
let checked = 0;

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  const refs = new Set();

  for (const [, value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) refs.add(value);
  for (const [, list] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const candidate of list.split(',')) refs.add(candidate.trim().split(/\s+/)[0]);
  }

  const body = html.replace(/<head>[\s\S]*?<\/head>/, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  for (const [, text] of body.matchAll(/>([^<>]+)</g)) usedStrings.add(normalize(text));
  for (const [, text] of html.matchAll(/\b(?:aria-label|alt)="([^"]+)"/g)) usedStrings.add(normalize(text));
  for (const [, text] of html.matchAll(/<meta\s+name="description"\s+content="([^"]+)"/g)) usedStrings.add(normalize(text));
  for (const [, text] of html.matchAll(/<title>([^<]+)<\/title>/g)) usedStrings.add(normalize(text));

  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));

  for (const ref of refs) {
    if (isRemote(ref) || ref.startsWith('mailto:')) continue;
    checked++;
    if (ref.startsWith('#')) {
      if (ref.length > 1 && !ids.has(ref.slice(1))) errors.push(`${page}: broken anchor ${ref}`);
      continue;
    }
    const path = ref.split(/[?#]/)[0];
    if (path.startsWith('/_vercel/')) continue; // injected by the host at deploy time
    const file = path.startsWith('/') ? join(root, path) : join(root, dirname(page), path);
    // Directory-style routes ("/", "/links") resolve to their index.html.
    if (existsSync(file) && !file.endsWith('/') && path !== '/' && /\.[a-z0-9]+$/i.test(path)) continue;
    if (existsSync(join(file, 'index.html'))) continue;
    if (existsSync(file) && /\.[a-z0-9]+$/i.test(path)) continue;
    (path.includes('/cv/') || path.startsWith('cv/') ? warnings : errors).push(`${page}: missing ${path}`);
  }
}

// Every Spanish translation must still match an English string in the pages.
const { ES } = await import('../js/i18n/es.js');
for (const key of Object.keys(ES)) {
  if (!usedStrings.has(key)) errors.push(`i18n: unused translation "${key.slice(0, 60)}"`);
}

for (const message of warnings) console.warn(`warn  ${message}`);
for (const message of errors) console.error(`error ${message}`);
console.log(`${checked} local references checked: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
