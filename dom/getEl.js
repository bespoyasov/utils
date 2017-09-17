/**
 * Выбирает элемент по селектору
 * @param {String} slctr ЦСС-селектор
 * @return {DOMNode}
 */
const getEl = slctr => 
  typeof(document) !== 'undefined'
    && document.querySelector(slctr)
    || null

export default getEl