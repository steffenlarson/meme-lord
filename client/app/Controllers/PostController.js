import { ProxyState } from "../AppState.js"
import { commentService } from "../Services/CommentService.js";
import { postService } from "../Services/PostService.js"

function _draw() {
  let posts = ProxyState.posts;
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

  create() {
    window.event.preventDefault()
    let form = window.event.target
    let newPost = {
      imgUrl: form['imgUrl'].value,
      category: form['category'].value
    }

    try {
      let imgId = postService.createWithInitialCaption(newPost, form['initialCaption'].value);
    } catch (error) {
      console.error(error)
    }
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#exampleModal").modal('hide');
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