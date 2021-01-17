import mongoose from "mongoose";
import CaptionImage from "./CaptionImage";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    creatorId: { type: String },
    username: { type: String },
    captionswon: { type: Number },
    title: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

User.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

User.virtual('un', {
  localField: 'username',
  ref: 'Account',
  foreignField: 'name',
  justOne: true
})


export default User;



// this.id = data._id
// this.username = data.username
// this.captionswon = data.captionswon
// this.title = data.title