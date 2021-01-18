/* eslint-disable no-unused-vars */
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import Post from './Models/Post.js'
import Comment from './Models/comment.js'
import User from './Models/User.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  values = []
  /** @type {Post []} */
  posts = []
  /** @type {Comment[]} */
  comments = []
  /** @type {User []} */
  users = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
