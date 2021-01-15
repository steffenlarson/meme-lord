import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CaptionImagesService {
  async getProfileTodos(userId) {
    return await dbContext.CaptionImages.find({ creatorId: userId }).populate('submittedUser')
  }

  async find(query = {}) {
    const captionImages = await dbContext.CaptionImages.find(query).populate('creator')
    return captionImages
  }

  async findById(id) {
    const todo = await dbContext.CaptionImages.findById(id)
    if (!todo) {
      throw new BadRequest('Invalid Id')
    }
    return todo
  }

  async create(body) {
    return await dbContext.CaptionImages.create(body)
  }

  async edit(todo) {
    const newTodo = await dbContext.CaptionImages.findOneAndUpdate({ _id: todo.id, creatorId: todo.creatorId }, todo, { new: true }).populate('creator')
    if (!newTodo) {
      throw new BadRequest('You are not the creator, or this is not a valid todo')
    }
    return newTodo
  }

  async delete(id, userId) {
    const todo = await dbContext.CaptionImages.findOneAndRemove({ _id: id, creatorId: userId })
    if (!todo) {
      throw new BadRequest('You are not the creator, or this is not a valid todo')
    }
    return 'successfully deleted'
  }
}

export const captionImagesService = new CaptionImagesService()