// @ts-check
import { t } from './i18n.js';
import { showToast } from './toast.js';

const FEEDBACK_MS = 2000;

/**
 * Clipboard API with a textarea fallback for insecure contexts.
 * @param {string} text
 */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const tmp = document.createElement('textarea');
    tmp.value = text;
    tmp.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    tmp.remove();
  }
}

/** Wires every `.btn-copy-email[data-email]` button. */
export function initCopyEmail() {
  document.querySelectorAll('.btn-copy-email').forEach(btn => {
    if (!(btn instanceof HTMLElement) || !btn.dataset.email) return;
    const { email } = btn.dataset;

    btn.addEventListener('click', async () => {
      await copyText(email);
      showToast(`${t('Email copied')} — ${email}`);
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), FEEDBACK_MS);
    });
  });
}
