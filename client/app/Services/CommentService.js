import { ProxyState } from "../AppState.js"
import { memeapi } from "./AxiosService.js"
import Comment from "../Models/Comment.js"

class CommentService {
  async downvote(id) {
    let changed = ProxyState.comments.find(c => c.id == id)
    changed.score -= 1
    let res = await memeapi.put("api/captionstrings/" + id, changed)

  }
  async upvote(id) {
    this.getComments()
    let changed = ProxyState.comments.find(c => c.id === id)
    changed.score += 1
    console.log(changed)
    await memeapi.put("api/captionstrings/" + id, changed)

  }

  async create(id, newString) {
    let res = await memeapi.post('api/captionstrings', newString)
    console.log(res.data)
    let current = ProxyState.posts.find(p => p.id == id)
    current.captions = [...current.captions, newString]
  }

  async getComments() {
    let res = await memeapi.get("api/captionstrings")
    console.log(res.data)
    ProxyState.comments = res.data.map(caption => new Comment(caption))
    console.log(ProxyState.comments)
  }
}




export const commentService = new CommentService