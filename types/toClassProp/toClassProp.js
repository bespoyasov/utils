/**
 * Returns type of given arg relying on [[Class]] property 
 * in [object [[Class]]] definition
 * @param {Any} arg 
 * @return {String}
 */
const toClassProp = (arg) =>
  Object
  .prototype
  .toString
  .call(arg)
  .match(/\s([a-zA-Z]+)/)[1]
  .toLowerCase()

export default toClassProp