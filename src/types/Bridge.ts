export type TPlatform = 'web' | 'android' | 'ios' | ''

export interface IBridge {
  readonly platform: TPlatform
  readonly targetOrigin: string
  subscribe: () => void
  dispatch: (name: string, payload?: TData) => void
}
