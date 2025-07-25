import {Menu, Tray, nativeImage, BrowserWindow} from 'electron'
import path from 'node:path'
import { createDetailWindow } from './index'

export function createTray(window: BrowserWindow) {
    const appIcon = path.join(__dirname, "resources", "logografico.png")
    let icon = nativeImage.createFromPath(appIcon)

    const tray = new Tray(icon)

    const menu = Menu.buildFromTemplate([
        {label: "Dev clientes", enabled: false},
        {type: 'separator'},
        {label: 'Layout-1', type: 'checkbox', checked : true},
        {label: 'Layout-2', type: 'checkbox'},
        {type: 'separator'},
        {
            label: "Abrir",
            click: () => {
                window.show()
            }
        },
        {
            label: "Cadastrar Cliente",
            click: () => {
                //enviar mensagem do processo main para render 
                window.webContents.send("new-customer");

                if(window.isMinimizable()) window.restore();
                window.focus()
            }
        },
        {
            label: "Sobre",
            click: () => {
                createDetailWindow()
            }
        },
        {type: 'separator'},
        {
            label: "Sair",
            role: "quit"
        },
    ])

    tray.setToolTip("Dev Cliente")

    tray.setContextMenu(menu)
}