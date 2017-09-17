/**
 * Выбирает коллекцию элементов по селектору
 * @param {String} slctr ЦСС-селектор
 * @return {DOMCollection}
 */
const getEls = slctr => 
  typeof(document) !== 'undefined'
    && document.querySelectorAll(slctr)
    || null

export default getEls