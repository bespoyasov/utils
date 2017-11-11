/**
 * Returns X-direction of event.page
 * @param {Event} e touhcmove or mousemove event
 * @return {Number}
 */
const getPageX = e =>
  e.changedTouches
    && e.changedTouches.length
    && e.changedTouches[0].pageX
  || e.touches
    && e.touches.length
    && e.touches[0].pageX
  || e.pageX
  || 0

export default getPageX