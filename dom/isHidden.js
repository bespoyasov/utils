/**
 * Determines if given node is hidden or is in hidden element
 * @param {DOMNode} node
 * @returns {Bool} 
 */
const isHidden = node => {
  if (!node) return false
  return window.getComputedStyle(node).display === 'none' 
    || el.offsetParent === null
}

export default isHidden