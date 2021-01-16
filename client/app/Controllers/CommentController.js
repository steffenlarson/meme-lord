import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"

function _draw() {
  let posts = ProxyState.posts;

  posts.forEach(i => {
    i.captions.sort((a, b) => (a.score < b.score) ? 1 : -1)
    if(i.captions[0])
    {

    }
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
    this.getComments()
  }

  getComments() {
    try {
      commentService.getComments()
    } catch (error) {
      console.error(error)
    }
  }

  create(imageID) {
    window.event.preventDefault()
    let form = window.event.target
    let newCaption = {
      creatorId: ProxyState.account._id,
      captionImage: imageID,
      // @ts-ignore
      caption: form.newComment.value,
      score: 0
    }
 
    console.log(newCaption);
    try {
      commentService.create(imageID, newCaption)
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