/**
 * Returns Y-direction of event.page
 * @param {Event} e touhcmove or mousemove event
 * @return {Number}
 */
const getPageY = e =>
  e.changedTouches
    && e.changedTouches.length
    && e.changedTouches[0].pageY
  || e.touches
    && e.touches.length
    && e.touches[0].pageY
  || e.pageY
  || 0

export default getPageY