const NOTICE_TYPES = new Set(['info', 'warning', 'success']);

/**
 * loads and decorates the notice block
 * @param {Element} block The notice block element
 */
export default function decorate(block) {
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const [titleCell, messageCell, typeCell] = cells;

  const title = titleCell?.textContent.trim() || '';
  const message = messageCell?.innerHTML || '';
  const requestedType = typeCell?.textContent.trim().toLowerCase() || 'info';
  const type = NOTICE_TYPES.has(requestedType) ? requestedType : 'info';

  block.classList.add('notice', `notice--${type}`);

  const titleMarkup = title ? `<h3 class="notice-title">${title}</h3>` : '';
  block.innerHTML = `
    <div class="notice-content">
      ${titleMarkup}
      <div class="notice-message">${message}</div>
    </div>
  `;
}
