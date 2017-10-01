import isArray from '../types/isArray'

/**
 * Returns array without last element
 * If array is empty or given argument is not an array, returns empty array
 * @param {Array} arr 
 */
const dropRight = arr =>
  isArray(arr)
  && [...arr.slice(0, arr.length - 1)]
  || []

export default dropRight