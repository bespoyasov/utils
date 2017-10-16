/**
 * Gets value from local storage and tries to JSON.parse it
 * In case of error returns null
 * @param {String} key
 * @return {Any}
 */
const getItem = (key='') => {
  if ('undefined' === typeof window) return null
  const ls = window && window.localStorage
  if (!ls) return null
  
  try {
    const res = ls.getItem(key)
    return !!res ? JSON.parse(res) : null
  }
  catch(e) { 
    console.error(e) 
    return null
  }
}

export default getItem