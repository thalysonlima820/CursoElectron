import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getUser: async () => ipcRenderer.invoke('GetUser'),
  openDetailWindow: () => ipcRenderer.invoke('open-detail-window'),

  onNewCustomer: (callback: () => void) => {
    ipcRenderer.on("new-customer", callback)

    return () => {
      ipcRenderer.off("new-customer", callback)
    }
  },
  fetchUser: () => {
    return ipcRenderer.invoke("fetch-users")
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
