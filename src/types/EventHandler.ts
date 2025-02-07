export type TPlatform = 'web' | 'android' | 'ios' | EmptyString

export interface IEventHandler {
  subscribe: (eventName: string, payload?: TData) => void
  dispatch: (name: string, payload?: TData) => void
}

export type MessageStringData = {
  name: string
  payload?: TData
}
