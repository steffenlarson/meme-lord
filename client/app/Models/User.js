

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


//NOTE bypassing the scoreboard model and just putting the template for the scoreboard here. Because all of the relevant info is here.