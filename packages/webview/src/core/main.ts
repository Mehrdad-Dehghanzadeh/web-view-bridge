import eventHandler from './eventHandler'
import bridge from '../methods'

function setup() {
  eventHandler.ready()
  //@ts-ignore
  window.bridge = { ...bridge }
  bridge.iframeLoaded()
}

setup()
