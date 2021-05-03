import mongoose, { Schema } from 'mongoose'

const artistSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  albums: {
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

artistSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      age: this.age,
      albums: this.albums,
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

const model = mongoose.model('Artist', artistSchema)

export const schema = model.schema
export default model
