import eventHandler from './eventHandler'
import bridge from '../methods'

function setup() {
  eventHandler.ready()
  //@ts-ignore
  window.bridge = { ...bridge }
  bridge.iframLoaded()
}

setup()

document.addEventListener('DOMContentLoaded', () => {
  bridge.setTitle('hello world')
})
