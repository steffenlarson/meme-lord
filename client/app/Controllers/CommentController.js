/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prefer-const */
import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"
import { userService } from "../Services/UserService.js";

function _draw() {
  let posts = ProxyState.posts
  posts.forEach(i => {
    i.captions.sort((a, b) => (a.score < b.score) ? 1 : -1)
    if (i.captions[0]) {
      i.winningUser = i.captions[0].user;
    }
    let template = ''
    i.captions.forEach(c => {
      template += c.Template
    })
    document.getElementById(`_${i.id}`).innerHTML = template
  })

  let users = ProxyState.users;

  users.forEach(u => {
    u.captionswon = 0;
  })

  posts.forEach(i => {
    users.forEach(u => {
      if (i.winningUser === u.id) {
        u.captionswon++;
      }
    })
  })

  users.sort((a, b) => (a.captionswon < b.captionswon) ? 1 : -1);
  let memeLord = ProxyState.users.slice(0, 1)
  let memeKnights = ProxyState.users.slice(1, 10)
  let memeSerfs = ProxyState.users.slice(10, ProxyState.users.length)

  let memeLordTemplate = `<ul>`;
  let memeKnightTemplate = `<ul>`;
  let memeSerfTemplate = `<ul>`;

  memeLord.forEach(i => {
    i.title = "MEME LORD";
    memeLordTemplate += `<li>${i.username}</li>`;
  })

  memeKnights.forEach(i => {
    i.title = "MEME KNIGHT";
    memeKnightTemplate += `<li>${i.username}</li>`;
  })

  memeSerfs.forEach(i => {
    i.title = "MEME SERF";
    memeSerfTemplate += `<li>${i.username}</li>`;
  })
  memeLordTemplate += `</ul>`;
  memeKnightTemplate += `</ul>`;
  memeSerfTemplate += `</ul>`;
  try {
    userService.updateUsers();
  } catch (error) {
    console.error(error)
  }

  let template = `
            <div class="card shadow bg-dark text-light">
          <div class="card-body">
            <h4 class="card-title text-center">TOP MEME-ERS</h4>
            <div id="scoreboard"></div>
            <p class="card-text">Meme Lord:</p> <p>${memeLordTemplate} </p>
            <p>Meme Knights:</p> <p>${memeKnightTemplate}</p>
            <p>Meme Serfs:</p> <p>${memeSerfTemplate}</p>

          </div>
          </div>
          `;

  document.getElementById('scoreboard').innerHTML = template;
}

export default class CommentController {
  constructor() {
    ProxyState.on('comments', _draw)
    this.getComments()
  }

  getComments() {
    try {
      commentService.getComments()
    } catch (error) {
      console.error(error)
    }
  }

  create(imageID) {
    window.event.preventDefault()
    let form = window.event.target
    let newCaption = {
      creatorId: ProxyState.account._id,
      captionImage: imageID,
      // @ts-ignore
      caption: form.newComment.value,
      score: 0
    }

    try {
      commentService.create(imageID, newCaption)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  upvote(id) {
    try {
      commentService.upvote(id).then(
        _draw
      )
    } catch (error) {
      console.error(error)
    }
  }

  downvote(id) {
    try {
      commentService.downvote(id).then(
        _draw
      )
    } catch (error) {
      console.error(error)
    }
  }
}
