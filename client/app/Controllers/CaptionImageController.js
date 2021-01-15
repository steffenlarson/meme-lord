import { ProxyState } from "../AppState.js"
import { captionImageService } from "../Services/CaptionImageService.js"
function _draw() {
  let template = ''
  ProxyState.captionImages.forEach(i => {
    template += i.Template
  })
  document.getElementById("imageField").innerHTML = template
}

export default class CaptionImageController {
  constructor() {
    ProxyState.on('captionImages', _draw)
  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newImg = formdata.imageUrl.value
    captionImageService.create(newImg)
  }

  getcomments(id) {
    try {
      captionImageService.getcomments(id)
    } catch (error) {
      console.error(error)
    }
  }
}