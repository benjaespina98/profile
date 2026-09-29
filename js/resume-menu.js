// @ts-check

/**
 * Enhances the `<details>` résumé picker: closes on outside click / Escape,
 * and flags PDFs that are not published yet instead of leaving a dead link.
 */
export function initResumeMenus() {
  document.querySelectorAll('details[data-resume-menu]').forEach(menu => {
    if (!(menu instanceof HTMLDetailsElement)) return;
    const summary = menu.querySelector('summary');
    const links = /** @type {HTMLAnchorElement[]} */ ([...menu.querySelectorAll('a.resume-link')]);
    let checked = false;

    const close = () => {
      menu.open = false;
    };

    document.addEventListener('click', e => {
      if (menu.open && e.target instanceof Node && !menu.contains(e.target)) close();
    });

    menu.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !menu.open) return;
      close();
      summary?.focus();
    });

    menu.addEventListener('toggle', () => {
      if (!menu.open || checked) return;
      checked = true;
      links.forEach(markIfMissing);
    });

    // Picking a file closes the panel once the download has started.
    links.forEach(link => link.addEventListener('click', () => setTimeout(close, 150)));
  });
}

/**
 * Only a definitive 404 disables a link; network errors leave it usable.
 * @param {HTMLAnchorElement} link
 */
async function markIfMissing(link) {
  try {
    const res = await fetch(link.href, { method: 'HEAD' });
    if (res.status !== 404) return;
  } catch {
    return;
  }
  link.setAttribute('aria-disabled', 'true');
  link.removeAttribute('href');
  link.removeAttribute('download');
  const meta = link.querySelector('.resume-meta');
  if (meta) meta.textContent = 'Soon';
}
