export type TPlatform = 'web' | 'android' | 'ios' | EmptyString

export interface IEventHandler {
  subscribe: () => void
  dispatch: (name: string, payload?: TData) => void
}
