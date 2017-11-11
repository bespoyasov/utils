import isiOS from './isiOS'
import isAndroid from './isAndroid'

/**
 * Defines user's OS
 * @return {String}
 */
const defineOS = () => {
  let result = 'is-unknown-os'
  if (navigator.appVersion.indexOf("Win") != -1) result = 'is-windows'
  if (navigator.appVersion.indexOf("Mac") != -1) result = 'is-mac'
  if (navigator.appVersion.indexOf("X11") != -1) result = 'is-unix'
  if (navigator.appVersion.indexOf("Linux") != -1) result = 'is-linux'
  if (isiOS()) result = 'is-ios'
  if (isAndroid()) result = 'is-android'
  return result
}

export default defineOS