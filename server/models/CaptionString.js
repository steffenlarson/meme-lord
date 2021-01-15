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

CaptionString.virtual('user', {
  localField: 'submittedUser',
  ref: 'User',
  foreignField: '_id',
  justOne: true
})

CaptionString.virtual('image', {
  localField: 'captionImage',
  ref: 'CaptionImage',
  foreignField: '_id',
  justOne: true
})

export default CaptionString;