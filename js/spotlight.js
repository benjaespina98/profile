// @ts-check
import { prefersReducedMotion } from './dom.js';

/** Cursor-following highlight on project cards (fine pointers only). */
export function initSpotlight() {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer || prefersReducedMotion()) return;

  document.querySelectorAll('.showcase-card').forEach(card => {
    if (!(card instanceof HTMLElement)) return;
    card.addEventListener(
      'pointermove',
      e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      },
      { passive: true },
    );
  });
}
