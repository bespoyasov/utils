/**
 * Instantly scrolls to page bottom
 */
const instantlyScrollToBottom = () => {
  if (typeof(window) === 'undefined') return null
  window.scrollTo(0, 100000)
}

export default instantlyScrollToBottom