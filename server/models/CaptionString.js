import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const CaptionString = new Schema(
  {
    submittedUser: { type: String, required: true },
    captionImage: { type: String },
    caption: { type: String },
    score: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default CaptionString;