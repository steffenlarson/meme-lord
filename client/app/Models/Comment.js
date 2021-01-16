export default class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.caption
    this.score = data.score
    this.post_id = data.captionImage
    this.user = data.creatorId
  }

  get Template() {
    return `
    <div style="font-size: large; text-align: center; color: white;"><span class="cAlign">${this.body}</span><span class="rAlign">${this.score}  <i class="fa fa-thumbs-down text-danger cursor-pointer rAlign" onclick="app.commentController.downvote('${this.id}')" aria-hidden="true"></i> <i class="fa fa-thumbs-up text-success cursor-pointer rAlign" onclick="app.commentController.upvote('${this.id}')" aria-hidden="true"></i>
    </span></div>
    

    
    `
  }
}