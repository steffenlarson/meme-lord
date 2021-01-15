import { usersService } from "../services/UsersService";
import { captionStringsService } from "../services/CaptionStringsService";
import { captionImagesService } from "../services/CaptionImagesService";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from '@bcwdev/auth0provider'

export class UsersController extends BaseController {
  constructor() {
    super("api/users")
    this.router
      // NOTE add auth0
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/captionstrings", this.getCaptionStrings)
      .get("/:id/submittedimages", this.getSubmittedImages)
      .get("/:id/winningimages", this.getWinningImages)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await usersService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await usersService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getCaptionStrings(req, res, next) {
    try {
      let data = await captionStringsService.find({ submittedUser: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getSubmittedImages(req, res, next) {
    try {
      let data = await captionImagesService.findSubmitted({ submittedUser: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getWinningImages(req, res, next) {
    try {
      let data = await captionImagesService.findWinning({ winningUser: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await usersService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await usersService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await usersService.delete(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error)
    }
  }
}