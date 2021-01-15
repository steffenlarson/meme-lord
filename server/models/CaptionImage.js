
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const CaptionImage = new Schema(
  {
    submittedUser: { type: String, required: true },
    winningUser: { type: String },
    category: { type: String },
    imgUrl: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CaptionImage.virtual('user', {
  localField: 'submittedUser',
  ref: 'User',
  foreignField: '_id',
  justOne: true
})

export default CaptionImage;
