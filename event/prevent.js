/**
 * Prevents default event and cancels bubbling
 * @param {Event} event Событие
 */
const prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}

export default prevent