/**
 * Defines if argument is string or number
 * @param {String || Number} arg 
 * @return {Bool}
 */
const isNumberOrString = arg => 
  typeof(arg) === 'string' 
  || typeof(arg) === 'number' 
  || false

export default isNumberOrString