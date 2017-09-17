/**
 * Gets value from local storage
 * @param {String} key
 * @return {Any}
 */
const getItem = (key='') => {
  const ls = window && window.localStorage
  if (!ls) return null
  
  try {
    const res = ls.getItem(key)
    return !!res ? JSON.parse(res) : null
  }
  catch (e) { 
    console.error(e) 
    return null
  }
}

export default getItem