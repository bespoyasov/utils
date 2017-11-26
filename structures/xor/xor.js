/**
 * Returns result of exclusive logic "or"
 * @param {Any} a 
 * @param {Any} b 
 * @return {Bool}
 */
const xor = (a, b) =>
  (!!a && !b) || (!a && !!b)

export default xor