export function isJsonString(str: string): boolean {
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
