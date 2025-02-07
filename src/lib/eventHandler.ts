import { IEventHandler, TPlatform } from '@type/EventHandler'

class EventHandler implements IEventHandler {
  //@ts-ignore
  private platform: TPlatform = 'web'
  private targetOrigin: string = '*'

  subscribe() {
    console.log('message')
  }

  dispatch(name: string, payload?: TData) {
    debugger
    try {
      const message = JSON.stringify({ name, payload })
      window.parent?.postMessage(message, this.targetOrigin)
    } catch (err) {
      console.error('Error Dispatch in webview : ', err)
    }
  }

  ready(platform: TPlatform = 'web', targetOrigin: string = '*') {
    this.platform = platform
    this.targetOrigin = targetOrigin
  }
}

const eventHandler = new EventHandler()

export default eventHandler
