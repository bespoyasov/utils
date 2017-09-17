/**
 * Returns valid mongo id-string
 * @return {String} 
 */
const createId = (m=Math, d=Date, h=16, s=s=>m.floor(s).toString(h)) =>
  s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

export default createId