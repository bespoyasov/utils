require('smoothscroll-polyfill').polyfill()

/**
 * Scrolls page by defined values by Y and X
 * @param {Number} top 
 * @param {Number} left 
 */
const scrollBy = (top=0, left=0) =>
  'undefined' !== typeof(window) 
    && window.scrollBy({ top, left, behavior: 'smooth' })
    || null

export default scrollBy