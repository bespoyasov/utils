/**
 * Defines if given keyboard event is pressing given character
 * @param {String} keyName
 * @param {Event} event
 * @param {Object} config
 * @returns {Func} => {Bool}
 */
const isKey = (keyName, config={}) => event => {
  if (!event || !event.keyCode) return false
  if (config.shift && !event.shiftKey) return false
 
  const {keyCode} = event
  switch (keyName) {
    case 'enter': return keyCode === 13
    case 'arrow-down': return keyCode === 40
    case 'arrow-up': return keyCode === 38
    case 'backspace': return keyCode === 8
    case 'tab': return keyCode === 9
    case 'escape': return keyCode === 27
    default: return false
  }
}

export default isKey