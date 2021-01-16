import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"

function _draw() {
  let posts = ProxyState.posts;

  posts.forEach(i => {
    let template = ''
    i.captions.forEach(c => {
      template += c.Template
    })
    document.getElementById(`_${i.id}`).innerHTML = template
  })

}

export default class CommentController {

  constructor() {
    ProxyState.on('comments', _draw)
  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newCaption = {
      body: formdata.newComment.value
    }
    try {
      commentService.create(newCaption)
    } catch (error) {
      console.error(error)
    }
  }

  upvote(id) {
    try {
      commentService.upvote(id)
    } catch (error) {
      console.error(error)
    }
  }

  downvote(id) {
    try {
      commentService.downvote(id)
    } catch (error) {
      console.error(error)
    }
  }

}