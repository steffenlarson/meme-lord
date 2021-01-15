import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import CaptionImage from './Models/CaptionImage.js'
import CaptionString from "./Models/CaptionString.js"

class AppState extends EventEmitter {
  user = {}
  account = {}
  values = []
  /**@type {CaptionImage []} */
  captionImages = []
  /**@type {CaptionString []} */
  captionString = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
