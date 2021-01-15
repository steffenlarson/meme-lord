import { captionStringsService } from "../services/CaptionStringsService";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CaptionStringsController extends BaseController {
  constructor() {
    super("api/captionstrings")
    this.router
      // NOTE add auth0
      .get("", this.getAll)
      .get("/:id", this.getById)
      // .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await captionStringsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await captionStringsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await captionStringsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await captionStringsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await captionStringsService.delete(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error)
    }
  }
}