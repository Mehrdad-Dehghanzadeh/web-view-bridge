export function isJsonString(str) {
  let val = false

  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      val = true
    } catch (e) {
      val = false
    }
  }

  return val
}
