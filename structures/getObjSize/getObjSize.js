import isObject from '../../types/isObject'

/**
 * Returns count of keys in object
 * if given argument is not an object or an empty object returns 0
 * @param {Object} obj  
 * @return {Number}
 */
const getObjSize = obj =>
  isObject(obj)
    ? (Object.keys(obj) || []).length
    : 0

export default getObjSize