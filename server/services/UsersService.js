import { dbContext } from '../db/DbContext'


class UsersService {

  async find(query = {}) {
    const Users = await dbContext.Account.find(query).populate('creator')
    return Users
  }
}

export const usersService = new UsersService()