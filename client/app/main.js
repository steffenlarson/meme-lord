import { AuthController } from "./Controllers/AuthController.js";
import CaptionStringController from "./Controllers/CaptionString.js";
import CaptionImageController from "./Controllers/CaptionImageController.js"
import ValuesController from "./Controllers/ValuesController.js";
import CaptionImage from "./Models/CaptionImage.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  captionStringController = new CaptionStringController
  captionImageController = new CaptionImageController
}

window["app"] = new App();
