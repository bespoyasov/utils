import isObject from '../types/isObject'

/**
 * Returns count of keys in object
 * @param {Object} obj  
 * @return {Number}
 */
const getObjSize = obj =>
  !!obj
  && isObject(obj)
  && (Object.keys(obj) || []).length
  || 0

export default getObjSize