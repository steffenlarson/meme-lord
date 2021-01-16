import Comment from "./Comment.js"
import { ProxyState } from "../AppState.js"


export default class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.category = data.category
    this.id = data._id
    this.comments = []
  }

  get Template() {
    return `
         <div class="card" style="width: 18rem;">
          <img src="${this.imgUrl}" class="card-img-top img-fluid" alt="">
          <form onsubmit="app.commentController.create()">
            <input type="text" name="newComment" id="" maxlength="50" onsubmit="app.captionStringController.create()">
            <button class="btn btn-danger" type="button" aria-expanded="false" aria-controls="commentField"
              data-bs-toggle="collapse" onclick="app.postController.getcomments('${this.id}')" data-bs-target="#_${this.id}">Show Comments</button>
          </form>
        </div>
        <div class="collapse" id="_${this.id}" style="min-height: 20vh;">
        
        </div>

    `
  }
  
  get Comments(){
    let template = "";
    let comments = ProxyState.comments.filter(c=> c.post_id == this.id);
    comments.forEach(t=> template += t.Template);
    return template;
  }
}