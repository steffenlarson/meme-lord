/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import { ProxyState } from "../AppState.js"
import User from "../Models/User.js"
import { memeapi } from "../Services/AxiosService.js"

class UserService {
  updateAllUsers(body) {
    throw new Error("Method not implemented.")
  }

  async getUsers() {
    let res = await memeapi.get("api/users")
    ProxyState.users = res.data.map(u => new User(u))
  }

  async updateUsers() {
    let users = ProxyState.users;
    await memeapi.put('api/users', users)
  }
}

export const userService = new UserService()
