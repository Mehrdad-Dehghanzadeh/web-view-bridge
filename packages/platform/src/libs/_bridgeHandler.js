import { isJsonString } from './_text'

const methods = {
  setTitle(payload) {
    const el = document.getElementById('title')
    el.innerHTML = payload.title ?? ''
  }
}

export default () => {
  addEventListener('message', (event) => {
    if (event.data && isJsonString(event.data)) {
      try {
        const data = JSON.parse(event.data)
        if (data?.name) {
          methods[data?.name]?.(data.payload)
        }
      } catch (e) {
        console.log('platForm ==== Error', e)
      }
    }
  })
}
