import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async find(query = {}) {
    const values = await dbContext.Users.find(query)
    return values
  }

  async findById(id) {
    const value = await dbContext.Users.findById(id)
    if (!value) {
      throw new BadRequest('Invalid Id')
    }
    return value
  }

  async create(user) {
    return await dbContext.Users.create(user)
  }
  async edit(update) {
    let updated = await dbContext.Users.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Users.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }
}


export const usersService = new UsersService()
