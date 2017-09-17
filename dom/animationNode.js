/**
 * Sets a className for given element and removes it after given time in milliseconds
 * @param {DOMNode} node
 * @param {String} animationName
 * @param {Number} timeout ms
 */
const animateNode = (node, animationName, timeout=800) => {
  if (!node || !node.classList) return
  node.classList.add(`has-${animationName}-animation`)
  setTimeout(() => 
    node.classList.remove(`has-${animationName}-animation`), timeout)
}

export default animateNode