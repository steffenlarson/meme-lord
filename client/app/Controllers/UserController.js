/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import { ProxyState } from "../AppState.js"
import { userService } from "../Services/UserService.js"

function _draw() {
  let users = ProxyState.users
  let template = ''
  users.forEach(u => {
    template += u.Template
  })
  document.getElementById('scoreboard').innerHTML = template
}

export default class UserController {
  constructor() {
    ProxyState.on("users", _draw)
    _draw()
    this.getUsers()
  }

  getUsers() {
    try {
      userService.getUsers()
    } catch (error) {
      console.error(error)
    }
  }
}
