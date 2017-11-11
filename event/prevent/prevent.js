/**
 * Prevents default event and cancels bubbling
 * @param {Event} event
 */
const prevent = e => {
  if (!e) return
  e.preventDefault()
  e.stopPropagation()
}

export default prevent