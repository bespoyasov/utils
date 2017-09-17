/**
 * Instantly scrolls to page top
 */
const instantlyScrollToTop = () => {
  if (typeof(window) === 'undefined') return null
  window.scrollTo(0, 0)
}

export default instantlyScrollToTop