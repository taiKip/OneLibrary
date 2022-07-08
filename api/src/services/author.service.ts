import Author, { AuthorDocument } from '../models/Author'
import { NotFoundError } from '../helpers/apiError'
import { userOptionsType } from '../types/types'

const createAuthor = async (
  Author: AuthorDocument
): Promise<AuthorDocument> => {
  return Author.save()
}

const findById = async (authorId: string): Promise<AuthorDocument> => {
  const foundAuthor = await Author.findById(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

const findAll = async (options:userOptionsType|{}): Promise<AuthorDocument[]> => {
  return Author.find(options)
}

const updateAuthor = async (
  authorId: string,
  update: Partial<AuthorDocument>
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(authorId, update, {
    new: true,
  })

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

const deleteAuthor = async (
  authorId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = Author.findByIdAndDelete(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

export default {
  createAuthor,
  findById,
  findAll,
  updateAuthor,
  deleteAuthor,
}
