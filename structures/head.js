import isArray from '../types/isArray'

/**
 * Returns first element in given array
 * If array is empty, returns null
 * @param {Array} arr 
 * @return {Any}
 */
const head = arr =>
  isArray(arr)
  && arr[0]
  || null

export default head