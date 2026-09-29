// @ts-check

/** Fades elements in once as they enter the viewport. */
export function initReveal() {
  const targets = document.querySelectorAll('.fade-in');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('appear'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  );

  targets.forEach(el => observer.observe(el));
}
