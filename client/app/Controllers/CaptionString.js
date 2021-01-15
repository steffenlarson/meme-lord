import { ProxyState } from "../AppState.js";
import { captionStringService } from "../Services/CaptionStringService.js"


function _drawComments() {
  let template = ''
  ProxyState.captionString.forEach(s => {
    template += s.Template
  })
  document.getElementById()
}

export default class CaptionStringController {

  constructor() {

  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newCaption = formdata.newComment.value
    try {
      captionStringService.create(newCaption)
    } catch (error) {
      console.error(error)
    }
  }

}