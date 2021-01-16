import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.category = data.category
    this.id = data._id
    this.captions = []
  }

  get Template() {
    return `
         <div class="card w-100">
          <img src="${this.imgUrl}" class="card-img-top img-fluid " alt="">
          <form id="commentForm" type="submit" onsubmit="app.commentController.create()">
            <input form = "commentForm" type="text" name="newComment" id="" maxlength="50">
            <button class="btn btn-danger" type="button" aria-expanded="false" aria-controls="commentField"
              data-bs-toggle="collapse" onclick="app.postController.getcomments('${this.id}')" data-bs-target="#_${this.id}">Show Comments</button>
          </form>
        </div>
        <div class="collapse" id="_${this.id}" style="min-height: 20vh;">
            ${this.Comments}
        </div>

    `
  }

  get Comments() {
    let template = ""
    let comments = ProxyState.comments.filter(c => c.post_id == this.id)
    comments.forEach(c => template += c.Template)
    return template
  }

}