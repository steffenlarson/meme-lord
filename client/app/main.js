import { AuthController } from "./Controllers/AuthController.js";
import CommentController from "./Controllers/CommentController.js";
import PostController from "./Controllers/PostController.js"
import ValuesController from "./Controllers/ValuesController.js";


class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  commentController = new CommentController
  postController = new PostController
}

window["app"] = new App();
