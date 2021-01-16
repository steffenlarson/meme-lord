import { ProxyState } from "../AppState.js"
import { userService } from "../Services/UserService.js"

function _draw() {
  let users = ProxyState.users;
  let template = ''
  users.forEach(u => {
    template += u.Template
  })
  document.getElementById('scoreboard').innerHTML = template
}

export default class UserController {

  constructor() {
    ProxyState.on('comments', _draw)
  }

  getUsers() {
    try {
      userService.getUsers()
    } catch (error) {
      console.error(error)
    }
  }

}