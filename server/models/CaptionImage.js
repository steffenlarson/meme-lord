import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const CaptionImage = new Schema(
  {
    creatorId: { type: String },
    winningUser: { type: String },
    category: { type: String, required: true },
    imgUrl: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

CaptionImage.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default CaptionImage;
