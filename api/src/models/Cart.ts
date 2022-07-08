import mongoose, { Document, Schema } from 'mongoose'

export type CartDocument = Document & {
  user: string
  books: any
  modifiedOn: number
}

const cartSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    books: [{ bookId: String, title: String, thumbnailUrl: String }],
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

export default mongoose.model<CartDocument>('Cart', cartSchema)
