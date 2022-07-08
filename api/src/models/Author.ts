import mongoose, { Document,Schema } from 'mongoose'

export type AuthorDocument = Document & {
  name: string
  email: string
  books:string[]
}

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
