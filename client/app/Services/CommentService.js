import { ProxyState } from "../AppState.js"
import { memeapi } from "./AxiosService.js"
import Comment from "../Models/Comment.js"

class CommentService {
  async downvote(id) {
    console.log(res.data)
    let changed = ProxyState.comments.find(c => c.id == id)
    changed.score -= 1
    let res = await memeapi.put("api/captionstrings/" + id, changed)

  }
  async upvote(id) {
    let res = await memeapi.get('api/captionstrings')
    console.log(res.data)
    let changed = ProxyState.comments.find(c => c.id === id)
    changed.score += 1
    await memeapi.put("api/captionstrings/" + id, changed)

  }

  async create(id, newString) {
    let res = await memeapi.post('captionimages/' + id + "/captionstrings", newString)
    console.log(res.data)
    let current = ProxyState.posts.find(p => p.id == id)
    current.captions = [...current.captions, newString]
  }

  async getComments() {
    let res = await memeapi.get("api/captionstrings")
    console.log(res.data)
  }
}




export const commentService = new CommentService