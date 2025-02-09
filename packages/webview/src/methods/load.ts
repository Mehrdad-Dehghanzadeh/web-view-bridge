import eventHandler from '../lib/eventHandler'

export const iframeLoaded: SimpleFunction = () => {
  document.addEventListener('DOMContentLoaded', () => {
    eventHandler.dispatch('iframeLoaded')
  })
}
