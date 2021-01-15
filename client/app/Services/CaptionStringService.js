import { ProxyState } from "../AppState.js"
import CaptionString from "../Models/CaptionString.js"

class CaptionStringService {

  async create(newString) {
    await some_api.post('captionstring', newString)
    let string = new CaptionString(newString)
    ProxyState.captionString = [...ProxyState.captionString, string]
  }
}


export const captionStringService = new CaptionStringService