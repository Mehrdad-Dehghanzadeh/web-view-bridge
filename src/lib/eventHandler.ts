import { IEventHandler, TPlatform, MessageStringData } from '@type/EventHandler'
import { isJsonString } from '../utils/text'

class EventHandler implements IEventHandler {
  //@ts-ignore
  private platform: TPlatform = 'web'
  private targetOrigin: string = '*'

  subscribe(name: string, payload?: TData) {
    if (name) {
      const customEvent = new CustomEvent(name, {
        detail: {
          ...payload
        }
      })

      dispatchEvent(customEvent)
    }
  }

  handleMessages() {
    window.addEventListener('message', (e: MessageEvent) => {
      try {
        if (e.data && isJsonString(e.data) && e.origin) {
          const { payload, name } = <MessageStringData>JSON.parse(e.data)
          this.subscribe(name, payload)
        }
      } catch (error) {
        console.log(error)
      }
    })
  }

  dispatch(name: string, payload?: TData) {
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
    this.handleMessages()
  }
}

const eventHandler = new EventHandler()

export default eventHandler
