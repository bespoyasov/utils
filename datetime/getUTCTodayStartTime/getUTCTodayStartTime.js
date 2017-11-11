/**
 * Returns UTC timestamp of todays start
 * @return {Number} ms
 */
const getUTCTodayStartTime = () => {
  const x = new Date()
  x.setHours(0)
  x.setMinutes(0)
  x.setSeconds(0)
  x.setMilliseconds(0)
  
  const msUTC = (x.getTime() + x.getTimezoneOffset() * 60 * 1000)
  return msUTC
}

export default getUTCTodayStartTime