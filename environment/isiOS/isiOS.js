/**
 * Determines is user's OS is iOS
 * @return {Bool}
 */
const isiOS = () =>
  !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

export default isiOS