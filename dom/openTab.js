/**
 * Opens new tab in browser
 * @param {String} url
 * @param {String} name
 * @param {Object} params
 */
const openTab = (url, name='', params={}) => 
  'undefined' !== typeof window
    ? window.open(url, name, params)
    : null

export default openTab