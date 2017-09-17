import isNumber from '../types/isNumber'
import isObject from '../types/isObject'

const THINSP = ' '

/**
 * Returns formatted sum with thin spaces between digits
 * @param {Number} sum 
 * @param {Object} config 
 * @return {String}
 */
const formatSum = (sum, config={}) => {
  if (!isNumber(sum) || !isObject(config)) return ''

  const { 
    biggerThan=10000,
    pointChar=',',
  } = config

  if (sum < biggerThan) return sum.toString()

  const _replace = str =>
    str.replace(/(\d)(?=(\d{3})+$)/g, '$1' + THINSP)

  const str = sum.toString()
  const pointIndex = str.lastIndexOf('.')
  if (pointIndex === -1) return _replace(str)

  const integer = str.substr(0, pointIndex) || ''
  const fraction = str.substr(pointIndex + 1) || ''
  return `${_replace(integer)}${pointChar}${afterDot}`
}

export default formatSum