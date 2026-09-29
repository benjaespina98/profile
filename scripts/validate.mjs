// Audits index.html: every local asset/link must exist and every #anchor must resolve.
// CV PDFs are reported as warnings (the picker degrades gracefully); anything else fails the run.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

const isRemote = ref => /^(?:[a-z]+:|\/\/)/i.test(ref);
const refs = new Set();

for (const [, value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) refs.add(value);
for (const [, list] of html.matchAll(/\bsrcset="([^"]+)"/g)) {
  for (const candidate of list.split(',')) refs.add(candidate.trim().split(/\s+/)[0]);
}

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const errors = [];
const warnings = [];

for (const ref of refs) {
  if (isRemote(ref)) continue;
  if (ref.startsWith('#')) {
    if (ref.length > 1 && !ids.has(ref.slice(1))) errors.push(`Broken anchor ${ref}`);
    continue;
  }
  const path = ref.split(/[?#]/)[0].replace(/^\//, '');
  if (path.startsWith('_vercel/')) continue; // injected by the host at deploy time
  if (existsSync(join(root, path))) continue;
  (path.startsWith('cv/') ? warnings : errors).push(`Missing file ${path}`);
}

for (const message of warnings) console.warn(`warn  ${message}`);
for (const message of errors) console.error(`error ${message}`);
console.log(`${refs.size} references checked: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
