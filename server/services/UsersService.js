/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async find(query = {}) {
    const Users = await dbContext.Account.find(query).populate('creator').populate('un')
    return Users
  }

  async updateAllUsers(users) {
    users.forEach(element => {
      dbContext.Users.findByIdAndUpdate(element.id, element);
    });
  }
}

export const usersService = new UsersService()
