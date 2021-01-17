/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import { ProxyState } from "../AppState.js"
import User from "../Models/User.js"
import { memeapi } from "../Services/AxiosService.js"

class UserService {
  async getUsers() {
    let res = await memeapi.get("api/users")
    console.log(res)
    ProxyState.users = res.data.map(u => new User(u))
    ProxyState.user.captionswon.sort(function (a, b) { return b - a })
  }
}

export const userService = new UserService()
