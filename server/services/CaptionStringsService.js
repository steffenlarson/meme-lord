import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CaptionStringsService {

  async find(query = {}) {
    const captionString = await dbContext.CaptionStrings.find(query).populate('creator')
    return captionString
  }

  async findById(id) {
    const captionstring = await dbContext.CaptionStrings.findById(id)
    if (!captionstring) {
      throw new BadRequest('Invalid Id')
    }
    return captionstring
  }

  async create(body) {
    return await dbContext.CaptionStrings.create(body)
  }

  async edit(captionString) {
    const newCaptionString = await dbContext.CaptionStrings.findOneAndUpdate({ _id: captionString.id, creatorId: captionString.creatorId }, captionString, { new: true }).populate('creator')
    if (!newCaptionString) {
      throw new BadRequest('You are not the creator, or this is not a valid Caption String')
    }
    return newCaptionString
  }

  async delete(id, userId) {
    const captionString = await dbContext.CaptionStrings.findOneAndRemove({ _id: id, creatorId: userId })
    if (!captionString) {
      throw new BadRequest('You are not the user, or this is not a valid Caption String')
    }
    return 'successfully deleted'
  }
}

export const captionStringsService = new CaptionStringsService()