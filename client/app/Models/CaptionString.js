export default class CaptionString {
  constructor(data) {
    this.comment = data.caption
    this.score = data.score
    this.post_id = data.CaptionImage
    this.user = data.SubmittedUser
  }

  get Template() {
    return `
    <span>${this.score}  ${this.comment} <button class="btn btn-outline-success"><i
                  class="fas fa-thumbs-up text-success"></i></button><button class="btn btn-outline-danger"><i
                  class="fas fa-thumbs-down text-danger"></i></button></span>
    
    `
  }
}