/**
 * Set value for defined key in local storage
 * @param {String} key
 * @param {Any} data
 */
const setItem = (key='', data=null) => {
  const ls = window && window.localStorage
  if (!ls) return null
  
  try {
    const converted = JSON.stringify(data)
    ls.setItem(key, converted)
  }
  catch (e) { console.error(e) }
}

export default setItem