/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"
import { memeapi } from "../Services/AxiosService.js"
import Comment from "../Models/Comment.js"

function loadComments() {

}
class PostService {
  async create(newImg) {
    await memeapi.post('api/captionimages', newImg)
    let img = new Post(newImg)
    ProxyState.posts = [...ProxyState.posts, img]
  }

  async getcomments(id) {
    let res = await memeapi.get('api/captionimages/' + id + '/captionstrings')
    let current = ProxyState.posts.find(p => p.id === id)
    current.captions = res.data.map(c => new Comment(c))
    ProxyState.comments = [...ProxyState.comments, res.data.map(c => new Comment(c))]
  }

  async loadPosts() {
    let res = await memeapi.get("api/captionimages")
    ProxyState.posts = res.data.map(p => new Post(p))
  }
}

export const postService = new PostService()
