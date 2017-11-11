import isNumber from '../../types/isNumber'

/**
 * Picks up the right plural form for russian lang
 * @param {String} case1 Рубль
 * @param {String} case2 Рубля
 * @param {String} case3 Рублей
 * @param {Number} numb
 * @return {Func}
 */
const pluralize = (case1, case2, case3) => (nmbr) => {
  if (!isNumber(nmbr)) return ''
  
  const base = nmbr - Math.floor(nmbr / 100) * 100
  if (base > 9 && base < 20) return case3
  else {
    const remainder = nmbr - Math.floor(nmbr / 10) * 10

    if (1 === remainder) return case1
    else if (0 < remainder && 5 > remainder) return case2
    else return case3
  }
}

export default pluralize