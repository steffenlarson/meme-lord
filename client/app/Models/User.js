import { ProxyState } from '../AppState.js'

export default class User {
  constructor(data) {
    this.id = data._id
    this.username = data.name
    this.captionswon = data.captionswon
    this.title = data.title
  }
}

// NOTE Easier to make an ordered list and then take the array of the users based
// on the sort function of how many winning posts that they have than to make multiple templates.Like Pokemon.
// Need to sort an array of the objects which are the key value pairs.Where can I find or make them ?
//   (The user: how many wins that user has)
// Then just list the values for what place you are.
