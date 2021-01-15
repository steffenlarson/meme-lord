import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CaptionImagesService {
  async findSubmitted(userId) {
    return await dbContext.CaptionImages.find({ submittedUser: userId }).populate('user')
  }

  async findWinning(userId) {
    return await dbContext.CaptionImages.find({ winningUser: userId }).populate('user')
  }

  async find(query = {}) {
    const captionImages = await dbContext.CaptionImages.find(query).populate('user')
    return captionImages
  }

  async findById(id) {
    const captionImage = await dbContext.CaptionImages.findById(id)
    if (!captionImage) {
      throw new BadRequest('Invalid Id')
    }
    return captionImage
  }

  async create(body) {
    return await dbContext.CaptionImages.create(body)
  }

  async edit(captionImage) {
    const newSubmittedUser = await dbContext.CaptionImages.findOneAndUpdate({ _id: captionImage.id, submittedUser: captionImage.submittedUser }, captionImage, { new: true }).populate('user')
    if (!newSubmittedUser) {
      throw new BadRequest('You are not the user, or this is not a valid caption image')
    }
    return newSubmittedUser
  }

  async delete(id, userId) {
    const captionImage = await dbContext.CaptionImages.findOneAndRemove({ _id: id, submittedUser: userId })
    if (!captionImage) {
      throw new BadRequest('You are not the user, or this is not a valid caption image')
    }
    return 'successfully deleted'
  }
}

export const captionImagesService = new CaptionImagesService()