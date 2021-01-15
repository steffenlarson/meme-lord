import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CaptionImagesService {
  async getUserWinningImages(userId) {
    return dbContext.CaptionImages.find({ winningUser: userId }).populate('creator')
  }
  async findSubmitted(userId) {
    return await dbContext.CaptionImages.find({ submittedUser: userId }).populate('creator')
  }



  async find(query = {}) {
    const captionImages = await dbContext.CaptionImages.find(query).populate('creator')
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
    const newSubmittedUser = await dbContext.CaptionImages.findOneAndUpdate({ _id: captionImage.id }, captionImage, { new: true }).populate('creator')
    if (!newSubmittedUser) {
      throw new BadRequest('You are not the user, or this is not a valid caption image')
    }
    return newSubmittedUser
  }

  async delete(id, userId) {
    const captionImage = await dbContext.CaptionImages.findOneAndRemove({ _id: id, creatorId: userId })
    if (!captionImage) {
      throw new BadRequest('You are not the user, or this is not a valid caption image')
    }
    return 'successfully deleted'
  }
}

export const captionImagesService = new CaptionImagesService()