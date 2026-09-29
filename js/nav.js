// @ts-check
import { prefersReducedMotion, required } from './dom.js';

const HEADER_OFFSET = 140;

/** Mobile menu, smooth in-page scrolling, scroll progress and scroll-spy. */
export function initNav() {
  const header = required('.site-header', HTMLElement);
  const nav = required('#mainNav', HTMLElement);
  const toggle = required('#navToggle', HTMLButtonElement);
  const progress = document.getElementById('scrollProgress');
  const sections = /** @type {HTMLElement[]} */ ([...document.querySelectorAll('section[id]')]);
  const spyLinks = /** @type {HTMLAnchorElement[]} */ ([...nav.querySelectorAll('a[href^="#"]')]);

  /** @param {boolean} open */
  const setMenu = open => {
    nav.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && e.target instanceof Node && !header.contains(e.target)) {
      setMenu(false);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href') ?? '';
      const target = id.length > 1 ? document.querySelector(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
      setMenu(false);
    });
  });

  let ticking = false;

  const update = () => {
    ticking = false;
    header.classList.toggle('scrolled', window.scrollY > 20);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }

    const current = sections.filter(s => window.scrollY >= s.offsetTop - HEADER_OFFSET).pop();
    spyLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${current?.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}
