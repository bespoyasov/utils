/**
 * Determines if given keyboard event is pressing given character
 * @param {String} keyName
 * @param {Event} event
 * @param {Object} config
 * @returns {Func}
 */
const isKey = (keyName, config={}) => event => {
  if (!event || !event.keyCode) return false
  
  if (config.withShift && !event.shiftKey) return false
 
  const {keyCode} = event
  switch (keyName) {
    case 'arrow-down': return keyCode === 40
    case 'arrow-right': return keyCode === 39
    case 'arrow-up': return keyCode === 38
    case 'arrow-left': return keyCode === 37

    case 'backspace': return keyCode === 8
    case 'escape': return keyCode === 27
    case 'enter': return keyCode === 13
    case 'tab': return keyCode === 9

    case 'shift': return keyCode === 16
    case 'ctrl': return keyCode === 17
    case 'alt': return keyCode === 18
    default: return false
  }
}

export default isKey