import { ProxyState } from "../AppState.js"
import { userService } from "../Services/UserService.js"

function _draw() {

}

export default class UserController {

  constructor() {
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