import mongoose, { Schema } from 'mongoose'
// mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var Test = new Schema({
//   _id: { type: String,
//     required: true,
//     index: true,
//     unique: true,
//     default: function(){
//       var b64 = new Buffer(new mongoose.mongo.ObjectID().toString()).toString('base64');
//       return b64;
//     }
//   },
//   title: String,
//   body: String
// });

const trackSchema = new Schema({
  album_id: {
    type: String
  },
  name: {
    type: String
  },
  duration: {
    type: Number
  },
  times_played: {
    type: Number
  },
  artist: {
    type: String
  },
  album: {
    type: String
  },
  self: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

trackSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.name,
      album_id: this.album_id,
      name: this.name,
      duration: this.duration,
      times_played: this.times_played,
      artist: this.artist,
      album: this.album,
      self: this.self,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Track', trackSchema)

export const schema = model.schema
export default model
