/**
 * Returns offset of given node
 * @param {DOMNode} node
 * @returns {Object} {top, left}
 */
const getElementOffset = node => {
  if (!node || 'undefined' === typeof window) return
  const rect = node.getBoundingClientRect()
  
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  }
}

export default getElementOffset