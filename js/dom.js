// @ts-check

/**
 * Typed query helper. It throws on a missing element so a broken selector
 * fails loudly instead of surfacing later as a null dereference.
 *
 * @template {Element} T
 * @param {string} selector
 * @param {new () => T} type
 * @param {ParentNode} [root]
 * @returns {T}
 */
export function required(selector, type, root = document) {
  const el = root.querySelector(selector);
  if (!(el instanceof type)) throw new Error(`Missing ${type.name} for "${selector}"`);
  return el;
}

/** @returns {boolean} true when the user asked the OS for less motion. */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
