import { ProxyState } from "../AppState.js"
import CaptionImage from "../Models/CaptionImage.js"


class CaptionImageService {

  async create(newImg) {
    await some_api.post('captionimage', newImg)
    let img = new CaptionImage(newImg)
    ProxyState.captionImages = [...ProxyState.captionImages, img]
  }
  async getcomments(id) {
    let res = await some_api.get('captionimages/' + id + "/captionstrings")
    let current = ProxyState.captionImages.find(p => p.id == id)
    console.log(res.data)
    current.comments = [res.data]
  }
}


export const captionImageService = new CaptionImageService