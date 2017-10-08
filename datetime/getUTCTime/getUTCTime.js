/**
 * Returns UTC timestamp of current datetime
 * @return {Number} ms
 */
const getUTCTime = () => {
  const x = new Date()
  const msUTC = (x.getTime() + x.getTimezoneOffset() * 60 * 1000)
  return msUTC
}

export default getUTCTime