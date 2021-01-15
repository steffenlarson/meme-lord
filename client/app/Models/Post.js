import CaptionString from "./CaptionString"



export default class Post {
  constructor(data) {
    this.imgUrl = data.imgurl
    this.category = data.category
    this.id = data._id
    this.comments = []
  }

  get Template() {
    return `
         <div class="card" style="width: 18rem;">
          <img src="${this.imgUrl}" class="card-img-top" alt="">
          <form onsubmit="app.commentController.create()">
            <input type="text" name="newComment" id="" maxlength="50" onsubmit="app.captionStringController.create()">
            <button class="btn btn-danger" type="button" aria-expanded="false" aria-controls="commentField"
              data-bs-toggle="collapse" onclick="app.postController.getcomments('${this.id}')" data-bs-target="#${this.id}">Show Comments</button>
          </form>
        </div>
        <div class="collapse" id="${this.id}" style="min-height: 20vh;">
        
        </div>

    `
  }

}