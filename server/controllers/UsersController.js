/* eslint-disable prefer-const */
import { usersService } from '../services/UsersService'
import { captionImagesService } from '../services/CaptionImagesService'
import BaseController from '../utils/BaseController'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('', this.getAll)
      .get('/:userId/winningimages', this.getUserWinningImages)
      .put('', this.updateAllUsers)
  }

  async getAll(req, res, next) {
    try {
      let data = await usersService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async updateAllUsers(req, res, next) {
    try {
      req.body.id = req.params.id
      await usersService.updateAllUsers(req.body)
    } catch (error) {
      next(error)
    }
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
