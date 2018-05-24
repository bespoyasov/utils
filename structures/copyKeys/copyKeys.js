import isArray from '../../types/isArray'
import isObject from '../../types/isObject'

/**
 * Takes a copy of given object 
 * only including specifed keys
 * @param {Object} obj to destruct
 * @param {Array} keys to include in copy
 * @return {Object}
 */
const copyKeys = (obj={}, keys=[]) => {
  if (!isObject(obj) 
    || !isArray(keys) 
    || !keys.length) return {}

  return keys.reduce((accumulator, key) => ({
    ...accumulator, 
    [key]: obj[key]
  }), {})
}

export default copyKeys