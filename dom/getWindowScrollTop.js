/**
 * Returns window scroll top
 * @return {Number}
 */
const getWindowScrollTop = () => 
  typeof(window) !== 'undefined' 
  && window 
  && window.scrollY 
  || 0

export default getWindowScrollTop