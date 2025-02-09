import { SetTitle } from '@type/Methods/Title'
import eventHandler from '../core/eventHandler'

export const setTitle: SetTitle = (title: string) => {
  eventHandler.dispatch('setTitle', { title })
}
