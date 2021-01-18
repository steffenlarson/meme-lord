/* eslint-disable no-return-assign */
import { ProxyState } from '../AppState.js'

export default class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.category = data.category
    this.id = data._id
    this.winningUser = data.winningUser
    this.captions = []
  }

  get Template() {
    return `
         <div class="card" style="width:30rem">
          <img src="${this.imgUrl}" class="card-img-top img-fluid " alt="">
          <div style="text-align: center;">
          <form id="commentForm" type="submit" onsubmit="app.commentController.create('${this.id}')">
            <input type="text" name="newComment"  size="50" minlength="1" maxlength="50">
            <button class="btn btn-success" type="submit">Submit Caption</button>
          </form>
          <button class="btn btn-danger" type="button" aria-expanded="false" aria-controls="commentField"
              data-bs-toggle="collapse" onclick="app.postController.getcomments('${this.id}')" data-bs-target="#_${this.id}">Show Comments</button>
          </div>
        </div>
        <div class="collapse" id="_${this.id}" style="min-height: 20vh;">
            ${this.Comments}
        </div>

    `
  }

  get Comments() {
    let template = ''
    const comments = ProxyState.comments.filter(c => c.post_id === this.id)
    comments.forEach(c => template += c.Template)
    return template
  }
}
