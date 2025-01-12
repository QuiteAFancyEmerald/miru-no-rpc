import { ipcMain, shell } from 'electron'

let notified = false
ipcMain.on('update', () => {
  // Do nothing as update functionality is disabled
})

export default class Updater {
  hasUpdate = false
  window
  torrentWindow
  /**
   * @param {import('electron').BrowserWindow} window
   * @param {import('electron').BrowserWindow} torrentWindow
   */
  constructor(window, torrentWindow) {
    this.window = window
    this.torrentWindow = torrentWindow
    // Remove any update-related logic
  }

  install(forceRunAfter = false) {
    // Disable the installation logic
    return false
  }
}
