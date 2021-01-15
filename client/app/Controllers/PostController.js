import { ProxyState } from "../AppState.js"
import { postService } from "../Services/PostService.js"
function _draw() {
  let template = ''
  ProxyState.posts.forEach(i => {
    template += i.Template
  })
  document.getElementById("imageField").innerHTML = template
}

export default class PostController {
  constructor() {
    ProxyState.on('posts', _draw)
    this.getTop()
  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newImg = formdata.imageUrl.value
    postService.create(newImg)
  }

  getcomments(id) {
    try {
      postService.getcomments(id)
    } catch (error) {
      console.error(error)
    }
  }

  getTop(id, score) {
    try {
      postService.getTop(id, score)
    } catch (error) {
      console.error(error)
    }
  }
}