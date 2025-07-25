import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getUser: () => Promise<string>
      openDetailWindow: () => void
      onNewCustomer: (callback: () => void) => () => void
      fetchUser: () => void
    }
  }
}

export {}
