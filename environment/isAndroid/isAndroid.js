/**
 * Determines is user's OS is Android
 * @return {Bool}
 */
const isAndroid = () =>
  !!navigator && navigator.userAgent 
    ? navigator.userAgent.toLowerCase().indexOf("android") > -1
    : false

export default isAndroid