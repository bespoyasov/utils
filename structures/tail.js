import isArray from '../types/isArray'

/**
 * Returns last element in given array
 * If array is empty, returns null
 * @param {Array} arr 
 * @return {Any}
 */
const tail = arr =>
  isArray(arr) 
  && arr[arr.length - 1]
  || null

export default tail