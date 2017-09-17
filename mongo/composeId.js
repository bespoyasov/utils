import isString from '../types/isString'

/**
 * Returns mongoId from given string
 * @param {String} id 
 * @returns {Object || Null} {$id: id}
 */
const composeId = id => 
  !id || !isString(id) ? null : ({'$id': id})

export default composeId