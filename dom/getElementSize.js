/**
 * Returns sizes of given node
 * @param {DOMNode} node 
 * @return {Object || Null} {height, width}
 */
const getElementSize = node =>
  node ? {
    height: node.offsetHeight || 0,
    width: node.offsetWidth || 0
  } : null

export default getElementSize