import eventHandler from '../core/eventHandler'

export const iframeLoaded: SimpleFunction = () => {
  document.addEventListener('DOMContentLoaded', () => {
    eventHandler.dispatch('iframeLoaded')
  })
}
