import { ProxyState } from "../AppState.js"
import { UserService } from "../UserService.js"

function _draw() {

}

export default class UserController {

  constructor() {
    ProxyState.on('comments', _draw)
  }


}