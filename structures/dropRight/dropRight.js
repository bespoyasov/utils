import isArray from '../../types/isArray'

/**
 * Returns array without 'count' last elements
 * If array is empty or given argument is not an array, returns empty array
 * @param {Array} arr 
 * @return {Func}
 * 
 * @param {Number} count
 * @return {Array} 
 */
const dropRight = (arr=[]) => (count=1) =>
  isArray(arr) 
  && !!arr.length 
  && arr.length > count
    ? [...arr.slice(0, arr.length - count)]
    : []

export default dropRight