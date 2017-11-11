/**
 * Returns user's timezone shift in ms
 * @return {Number} ms
 */
const getTimezoneOffset = () =>
  (new Date).getTimezoneOffset() * 60 * 1000

export default getTimezoneOffset