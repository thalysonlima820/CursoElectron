import {Menu, Tray, nativeImage, BrowserWindow} from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
    const appIcon = path.join(__dirname, "resources", "logografico.png")
    let icon = nativeImage.createFromPath(appIcon)

    const tray = new Tray(icon)

    const menu = Menu.buildFromTemplate([
        {label: "Dev clientes"}
    ])

    tray.setContextMenu(menu)
}