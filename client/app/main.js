import { AuthController } from "./Controllers/AuthController.js";
import CommentController from "./Controllers/CommentController.js";
import PostController from "./Controllers/PostController.js"
import ValuesController from "./Controllers/ValuesController.js";
import UserController from "./Controllers/UserController.js"


class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  commentController = new CommentController();
  postController = new PostController();
  userController = new UserController()
}

window["app"] = new App();
