

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const User = new Schema(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    captionsWon: { type: Number },
    title: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;