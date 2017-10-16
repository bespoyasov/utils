import isObject from '../../types/isObject'

/**
 * Returns id string from given mongoId object
 * @param {Object} mongoId
 * @returns {String} 
 */
const idToString = obj =>
  !!obj && isObject(obj) && obj['_id'] && obj['_id']['$id'] 
  || !!obj && isObject(obj) && obj['$id']
  || ''

export default idToString