import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import CaptionImagesSchema from '../models/CaptionImage'
import CaptionStringsSchema from '../models/CaptionString'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  CaptionImages = mongoose.model('CaptionImage', CaptionImagesSchema);
  CaptionStrings = mongoose.model('CaptionString', CaptionStringsSchema)
}

export const dbContext = new DbContext()
