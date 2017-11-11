import isiOS from '../isiOS'
import isAndroid from '../isAndroid'

/**
 * Determines user's OS
 * @return {String}
 */
const determineOS = () => {
  let result = 'is-unknown-os'
  if (typeof navigator === 'undefined' || typeof navigator.appVersion === 'undefined') return result

  if (isiOS()) result = 'is-ios'
  if (isAndroid()) result = 'is-android'
  if (navigator.appVersion.toLowerCase().indexOf('win') !== -1) result = 'is-windows'
  if (navigator.appVersion.toLowerCase().indexOf('mac') !== -1) result = 'is-mac'
  if (navigator.appVersion.toLowerCase().indexOf('x11') !== -1) result = 'is-unix'
  if (navigator.appVersion.toLowerCase().indexOf('linux') !== -1) result = 'is-linux'
  return result
}

export default determineOS