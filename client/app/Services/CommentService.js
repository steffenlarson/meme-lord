/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import { ProxyState } from "../AppState.js"
import { memeapi } from "./AxiosService.js"
import Comment from "../Models/Comment.js"

class CommentService {
  async downvote(id) {
    this.getComments()
    let changed = ProxyState.comments.find(c => c.id === id)
    changed.score -= 1
    console.log(changed)
    await memeapi.put("api/captionstrings/" + id, changed)
    await this.getComments()
  }

  async upvote(id) {
    this.getComments()
    let changed = ProxyState.comments.find(c => c.id === id)
    changed.score += 1
    console.log(changed)
    await memeapi.put("api/captionstrings/" + id, changed)
    await this.getComments()
  }

  async create(id, newString) {
    let res = await memeapi.post('api/captionstrings', newString)
    let current = ProxyState.posts.find(p => p.id === id)
    current.captions = [...current.captions, new Comment(res.data)]
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }

  async getComments() {
    let res = await memeapi.get("api/captionstrings")
    ProxyState.comments = res.data.map(caption => new Comment(caption))

    let posts = ProxyState.posts
    posts.forEach(i => {
      let imageCaptions = ProxyState.comments.filter(c => c.post_id === i.id)
      if (imageCaptions) {
        i.captions = []
        imageCaptions.forEach(c =>
          i.captions.push(c))
      }
    })
  }
}

export const commentService = new CommentService()
