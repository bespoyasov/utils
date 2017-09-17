require('smoothscroll-polyfill').polyfill()

/**
 * Scrolls page to defined values by Y and X
 * @param {Number} top 
 * @param {Number} left 
 */
const scrollTo = (top=0, left=0) =>
  'undefined' !== typeof(window) 
    && window.scrollTo({ top, left, behavior: 'smooth' })
    || null

export default scrollTo