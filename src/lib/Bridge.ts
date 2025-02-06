import { IBridge, TPlatform } from '@type/Bridge'

class Bridge implements IBridge {
  readonly platform: TPlatform
  readonly targetOrigin: string

  constructor(platform: TPlatform = 'web', targetOrigin: string = '*') {
    this.platform = platform
    this.targetOrigin = targetOrigin
  }

  subscribe() {
    console.log('message')
  }

  dispatch(name: string, payload?: TData) {
    try {
      const message = JSON.stringify({ name, payload })
      window.parent?.postMessage(message, this.targetOrigin)
    } catch (err) {
      console.error('Error Dispatch in webview : ', err)
    }
  }
}

export default Bridge
