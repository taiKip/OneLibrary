import mongoose, { Document, Schema } from 'mongoose'

export type BookDocument = Document & {
  title: string
  isbn?: string
  publisherDate:string
  thumbnailUrl: number
  shortDescription: string
  longDescription: string
  category:string[]
  isReserved?: boolean
  isBorrowed?:boolean
  authors: string[]
}

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
    },
    pageCount: {
      type:Number,
    },
    publisheDate: {
      type: Number,
      min: 1900,
    },
    shortDescription: {
      type: String,
    
    },
     longDescription: {
      type: String,
   },
    category: [{
      type: String,
      required: true,
    }],
   
    thumbnailUrl: {
      type: String,
      default:
        'https://t-openlibrary.s3.eu-north-1.amazonaws.com/book_default.jpg',
    },
    isReserved: {
      type: Boolean,
      default: false,
    },
    isBorrowed: {
      type: Boolean,
      default: false,
    },

    authors: [{ type: Schema.Types.ObjectId, required: true, ref: 'Authors' }],
  },
  { timestamps: true }
)

export default mongoose.model<BookDocument>('Book', bookSchema)
