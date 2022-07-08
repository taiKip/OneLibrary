import Book, { BookDocument } from '../models/Book'
import { NotFoundError } from '../helpers/apiError'
import { bookOptionsType, sortOptionsType } from '../types/types'
const create = async (Book: BookDocument): Promise<BookDocument> => {
  return Book.save()
}

const findById = async (bookId: string): Promise<BookDocument> => {
  const foundBook = await Book.findById(bookId).populate('authors')

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const findAll = async (
  options: bookOptionsType,
  sortOptions: sortOptionsType
): Promise<BookDocument[]> => {
  return Book.find(options).sort(sortOptions).exec()
}

const update = async (
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> => {
  const foundBook = await Book.findByIdAndUpdate(bookId, update, {
    new: true,
  })

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const deleteBook = async (bookId: string): Promise<BookDocument | null> => {
  const foundBook = Book.findByIdAndDelete(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}
const borrowBook = async (bookId: string): Promise<BookDocument | null> => {
    const foundBook = await Book.findByIdAndUpdate(bookId, update, {
      new: true,
    })

   if (!foundBook) {
     throw new NotFoundError(`Book ${bookId} not found`)
   }
  foundBook.isBorrowed = true;

  return foundBook
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteBook,
  borrowBook
}
