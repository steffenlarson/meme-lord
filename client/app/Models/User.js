import { ProxyState } from "../AppState.js"

export default class User {
  constructor(data) {
    this.id = data._id
    this.username = data.username
    this.captionswon = data.captionswon
    this.title = data.title
    this.memeLord = ProxyState.users.slice(0, 1)
    this.memeKnights = ProxyState.users.slice(1, 10)
    this.memeSerfs = ProxyState.users.slice(10, ProxyState.users.length)
  }

  get Template() {
    return `

      
            <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">TOP MEME-ERS</h4>
            <div id="scoreboard"></div>
            <p class="card-text">Meme Lord:</p> <p>${this.memeLord} </p>
            <p>Meme Knights:</p> <p>${this.memeKnights}</p>
            <p>Meme Serfs:</p> <p>${this.memeSerfs}

          </div>
        </div>

    `
  }

}




// NOTE Easier to make an ordered list and then take the array of the users based
// on the sort function of how many winning posts that they have than to make multiple templates.Like Pokemon.
// Need to sort an array of the objects which are the key value pairs.Where can I find or make them ?
//   (The user: how many wins that user has)
// Then just list the values for what place you are. 

