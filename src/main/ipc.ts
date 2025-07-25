import { ipcMain, IpcMain } from "electron";

ipcMain.handle("fetch-users", () => {
    console.log("buscando...")

    return[
        { id: 1, nome: "th"},
        { id: 2, nome: "fg"},
        { id: 3, nome: "rt"},
    ]
})