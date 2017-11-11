/**
 * Picks elements collection by given selector
 * @param {String} slctr
 * @return {DOMCollection}
 */
const getEls = slctr => 
  typeof(document) !== 'undefined'
    && document.querySelectorAll(slctr)
    || null

export default getEls