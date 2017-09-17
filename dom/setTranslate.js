import isString from '../types/isString'
import isNumber from '../types/isNumber'

/**
 * Sets translate for given element in given direction for given value
 * @param {DOMNode} node 
 * @param {String} axis 
 * @param {Number} value 
 */
const setTranslate = (node, axis='x', value=0) => {
  if (!node || !isString(axis) || !isNumber(value)) return

  const translate = `translate${axis.toUpperCase()}(${value}px)`
  node.style.webkitTransform = translate
  node.style.MozTransform = translate
  node.style.msTransform = translate
  node.style.OTransform = translate
  node.style.transform = translate
}

export default setTranslate