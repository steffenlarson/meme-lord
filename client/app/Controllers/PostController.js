import { ProxyState } from "../AppState.js"
import { postService } from "../Services/PostService.js"
function _draw() {
  let posts = ProxyState.posts;
  console.log(ProxyState.posts);
   let template = ''
  posts.forEach(i => {
    template += i.Template
  })
  document.getElementById("imageField").innerHTML = template
}

export default class PostController {
  constructor() {
    ProxyState.on('posts', _draw)
    this.loadPosts();
  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newPost = {
      imageUrl: formdata['imageUrl'].value,
      category: formdata['category'].value
    }
    try {
      postService.create(newPost)

    } catch (error) {
      console.error(error)
    }
  }
  getcomments(id) {
    try {
      postService.getcomments(id)
    } catch (error) {
      console.error(error)
    }
  }

  loadPosts() {
    try {
      postService.loadPosts()
    } catch (error) {
      console.error(error)
    }
  }
}