import eventHandler from './eventHandler'
import bridge from '../methods'

function setup() {
  eventHandler.ready()
  //@ts-ignore
  window.bridge = { ...bridge }
  bridge.iframeLoaded()
}

setup()

bridge.setTitle('web view on port 5173')

addEventListener('getName', (event: any) => {
  const data = event.detail

  const contentEl = document.getElementById('content')
  if (contentEl) {
    contentEl.innerHTML = data.firstName + ' ' + data.lastName
  }
})
