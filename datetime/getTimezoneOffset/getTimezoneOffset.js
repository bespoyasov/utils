/**
 * Returns number of ms of user's local timezone from UTC
 * @return {Number} ms
 */
const getTimezoneOffset = () =>
  (new Date).getTimezoneOffset() * 60 * 1000

export default getTimezoneOffset