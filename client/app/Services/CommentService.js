import { ProxyState } from "../AppState.js"
import { memeapi } from "./AxiosService.js"

class CommentService {

  async create(id, newString) {
    await memeapi.post('captionimages/' + id + "/captionstrings", newString)
    let current = ProxyState.posts.find(p => p.id == id)
    current.comments = [...current.comments, newString]
  }
}



export const commentService = new CommentService