import mongoose from "mongoose";
import CaptionImage from "./CaptionImage";
const Schema = mongoose.Schema;

const CaptionString = new Schema(
  {
    creatorId: { type: String },
    captionImage: { type: String },
    caption: { type: String },
    score: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CaptionString.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
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