// Audits every page: local assets/links must exist and every #anchor must resolve.
// CV PDFs are reported as warnings (the picker degrades gracefully); anything else fails the run.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const pages = ['index.html', 'links/index.html'];

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

for (const message of warnings) console.warn(`warn  ${message}`);
for (const message of errors) console.error(`error ${message}`);
console.log(`${checked} local references checked: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
