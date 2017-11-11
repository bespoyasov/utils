/**
 * Instantly scrolls to page bottom
 */
const instantlyScrollToBottom = () => {
  if (typeof(window) === 'undefined') return null
  window.scrollTo(0, 1000000)
}

export default instantlyScrollToBottom