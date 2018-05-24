import isArray from '../../types/isArray'
import isObject from '../../types/isObject'

/**
 * Destructs the given object 
 * and returns copy of it without given keys
 * @param {Object} obj to destruct
 * @param {Array} keys to omit
 * @return {Object}
 */
const omitKeys = (obj={}, keys=[]) => {
  if (!isObject(obj)) return {}
  if (!isArray(keys) || !keys.length) return obj

  return keys.reduce((rest, key) => {
    ({[key]: {}[key], ...rest} = rest)
    return rest
  }, {...obj})
}

export default omitKeys