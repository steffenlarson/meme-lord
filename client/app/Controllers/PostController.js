/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import { ProxyState } from "../AppState.js"
import { postService } from "../Services/PostService.js"

function _draw() {
  // eslint-disable-next-line prefer-const
  let posts = ProxyState.posts
  let template = ''
  posts.forEach(i => {
    template += i.Template
  })
  document.getElementById('imageField').innerHTML = template
}
// function stop(){
//   document.getElementById("navBar").classList.remove("hidden")
//   document.getElementById("startGame").classList.add("hidden")
// }

export default class PostController {
  constructor() {
    ProxyState.on('posts', _draw)
    this.loadPosts()
    _draw()
  }

  create() {
    window.event.preventDefault()
    let formdata = window.event.target
    let newPost = {
      imageUrl: formdata.imageUrl.value,
      category: formdata.category.value
    }
    try {
      postService.create(newPost)
      formdata.reset()
      // `${('#exampleModal').modal("hide")}`
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
