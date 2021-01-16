import { captionImagesService } from '../services/CaptionImagesService'
import BaseController from '../utils/BaseController'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('')
      .get('/:userId/winningimages', this.getUserWinningImages)

  }

  async getUserWinningImages(req, res, next) {
    try {
      const captionImages = await captionImagesService.getUserWinningImages(req.params.userId)
      res.send(captionImages)
    } catch (error) {
      next(error)
    }
  }
}