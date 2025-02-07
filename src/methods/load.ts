import eventHandler from '../lib/eventHandler'

export const iframLoaded: SimpleFunction = () => {
  document.addEventListener('DOMContentLoaded', () => {
    eventHandler.dispatch('iframLoaded')
  })
}
