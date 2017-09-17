/**
 * Defines user browser
 * @return {String}
 */
const defineBrowser = () => {
  const ua = navigator.userAgent
  let result = 'is-unknown-browser'

  if (ua.toLowerCase().indexOf('firefox') > -1) result = 'is-ff'
  if (ua.indexOf('MSIE') > -1) result = 'is-ie'
  if (ua.indexOf('Trident/') > -1) result = 'is-ie-11'
  if (ua.indexOf('Edge/') > -1) result = 'is-edge'
  if (/Chrome/.test(ua) && /Google Inc/.test(navigator.vendor)) result = 'is-chrome'

  return result
}

export default defineBrowser