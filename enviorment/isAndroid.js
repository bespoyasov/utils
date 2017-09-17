/**
 * Defines is user's OS is Android
 * @return {Bool}
 */
const isAndroid = () =>
  navigator.userAgent.toLowerCase().indexOf("android") > -1

export default isAndroid