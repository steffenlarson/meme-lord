

export default class User {
  constructor(data) {
    this.id = data._id
    this.username = data.username
    this.captionswon = data.captionswon
    this.title = data.title
  }

  get ScoreboardTemplate() {
    return `
    
    `
  }

}