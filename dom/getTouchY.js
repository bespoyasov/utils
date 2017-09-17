/**
 * Returns Y-direction length
 * @param {Event} e touhcmove event
 * @return {Number}
 */
const getTouchY = e =>
  e.changedTouches
    && e.changedTouches.length
    && e.changedTouches[0].pageY
  || e.touches
    && e.touches.length
    && e.touches[0].pageY
  || e.pageY
  || 0

export default getTouchY