import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"



export default class CommentController {

  constructor() {

  }

  create(e) {
    e.preventDefault()
    let formdata = e.target
    let newCaption = formdata.newComment.value
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