/**
 * Clears local storage
 */
const clear = () => {
  const ls = window && window.localStorage
  if (!ls) return null
  
  try {
    ls.clear()
  }
  catch (e) { 
    console.error(e) 
    return null
  }
}

export default clear