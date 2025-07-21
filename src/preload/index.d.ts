import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getUser: () => Promise<string>
      openDetailWindow: () => void
    }
  }
}

export {}
