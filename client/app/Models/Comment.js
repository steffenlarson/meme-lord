export default class Comment {
  constructor(data) {
    this.id = data._id
    this.body = data.caption
    this.score = data.score
    this.post_id = data.captionImage
    this.user = data.creatorId
  }

  get Template() {
    return `
    <span>${this.score}  ${this.body} <button onclick="app.commentController.upvote('${this.id}')"class="btn btn-outline-success"><i
                  class="fas fa-thumbs-up text-success"></i></button><button onclick="app.commentController.downvote('${this.id}')" class="btn btn-outline-danger"><i
                  class="fas fa-thumbs-down text-danger"></i></button></span>
    
    `
  }
}