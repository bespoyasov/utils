/**
 * Picks first element by given selector
 * @param {String} slctr
 * @return {DOMNode}
 */
const getEl = slctr => 
  typeof(document) !== 'undefined'
    && document.querySelector(slctr)
    || null

export default getEl