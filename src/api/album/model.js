import mongoose, { Schema } from 'mongoose'

const albumSchema = new Schema({
  artist_id: {
    type: String
  },
  name: {
    type: String
  },
  genre: {
    type: String
  },
  artists: {
    type: String
  },
  tracks: {
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

albumSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      artist_id: this.artist_id,
      name: this.name,
      genre: this.genre,
      artists: this.artists,
      tracks: this.tracks,
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

const model = mongoose.model('Album', albumSchema)

export const schema = model.schema
export default model
