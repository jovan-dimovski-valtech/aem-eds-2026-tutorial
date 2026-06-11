/**
 * loads and decorates the cf-press block
 * @param {Element} block The cf-press block element
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  const reference = link ? link.getAttribute('href') : block.textContent.trim();

  // Useful for inspecting the raw EDS output when no overlay is used.
  // eslint-disable-next-line no-console
  console.log('[cf-press] content fragment reference:', reference);

  block.classList.add('cf-press');
}
