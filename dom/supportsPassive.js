/**
 * Test if passive event listeners are supported
 * via a getter in the options object to see if the passive property is accessed
 * @return {Bool}
 */
const supportsPassive = () => {
  let supportsPassive = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() { supportsPassive = true }
    })
    window.addEventListener("test", null, opts)
  } catch (e) {}
  return supportsPassive
}

export default supportsPassive