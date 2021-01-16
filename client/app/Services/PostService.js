import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"
import { memeapi } from "../Services/AxiosService.js"

class PostService {

  async create(newImg) {
    await memeapi.post('api/captionimages', newImg)
    let img = new Post(newImg)
    ProxyState.posts = [...ProxyState.posts, img]
  }
  async getcomments(id) {
    let res = await memeapi.get('api/captionimages/' + id + "/captionstrings")
    let current = ProxyState.posts.find(p => p.id == id)
    console.log(res.data)
    current.comments = [res.data]
  }

  async loadPosts() {
    let res = await memeapi.get("api/captionimages")
    console.log(res.data[0])
    ProxyState.posts = res.data.map(p=> new Post(p))
  }
}


export const postService = new PostService