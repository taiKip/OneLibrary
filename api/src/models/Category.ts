import mongoose, { Document, Schema } from 'mongoose'

export type CategoryDocument = Document & {
  name: string
  books: string[]
}

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
})

export default mongoose.model<CategoryDocument>('Category', CategorySchema)
