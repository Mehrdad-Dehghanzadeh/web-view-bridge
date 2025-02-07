import eventHandler from './eventHandler'
import bridge from '../methods'

function setup() {
  eventHandler.ready()
  //@ts-ignore
  window.bridge = { ...bridge }
}

setup()

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    bridge.setTitle('hello world')
  }, 4000)
})
