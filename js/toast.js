// @ts-check

const VISIBLE_MS = 2600;

/** @type {ReturnType<typeof setTimeout> | undefined} */
let timer;

/** @param {string} message */
export function showToast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove('show'), VISIBLE_MS);
}
