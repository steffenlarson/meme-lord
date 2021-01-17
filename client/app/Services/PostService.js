import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"
import { memeapi } from "../Services/AxiosService.js"
import Comment from "../Models/Comment.js"
import {commentService} from "../Services/CommentService.js"

function loadComments() {

}
class PostService {

  async create(newImg) {
    let imgId = await memeapi.post('api/captionimages', newImg)
    let img = new Post(newImg)
    ProxyState.posts = [...ProxyState.posts, img]
    return imgId;
  }

  async createWithInitialCaption(newImg, caption) {
    let res = await memeapi.post('api/captionimages', newImg)
    let img = new Post(newImg)
    img.id = res.data.id;
    ProxyState.posts = [...ProxyState.posts, img]

    let newComment = {
      creatorId: ProxyState.account._id,
      captionImage: res.data.id,
      // @ts-ignore
      caption: caption,
      score: 0
    }

    commentService.create(res.data.id, newComment);
    
  }
  async getcomments(id) {
    let res = await memeapi.get('api/captionimages/' + id + '/captionstrings')
    let current = ProxyState.posts.find(p => p.id == id)
    current.captions = res.data.map(c => new Comment(c));
    ProxyState.comments = [...ProxyState.comments, res.data.map(c => new Comment(c))]
  }


  async loadPosts() {
    let res = await memeapi.get("api/captionimages")
    ProxyState.posts = res.data.map(p => new Post(p))
  }
}


export const postService = new PostService