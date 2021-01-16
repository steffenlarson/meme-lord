import { ProxyState } from "../AppState.js"
import { memeapi } from "./AxiosService.js"
import Comment from "../Models/Comment.js"

class CommentService {
  async downvote(id, newScore) {
    await memeapi.post("api/" + id, newScore)
  }
  async upvote(id) {

  }

  async create(id, newString) {
    await memeapi.post('captionimages/' + id + "/captionstrings", newString)
    let current = ProxyState.posts.find(p => p.id == id)
    current.comments = [...current.comments, newString]
  }
}


export const commentService = new CommentService