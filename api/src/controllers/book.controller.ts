import { Request, Response, NextFunction } from 'express'

import Book from '../models/Book'
import BookService from '../services/book.services'
import { BadRequestError } from '../helpers/apiError'
import { bookOptionsType, sortOptionsType } from '../types/types'

// POST /books
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, authors, publisher, publishYear, category, isbn } = req.body

    const book = new Book({
      title,
      authors,
      publisher,
      publishYear,
      category,
      isbn,
    })

    await BookService.create(book)
    res.json(book)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /books/:bookId
export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const bookId = req.params.bookId
    const updatedMovie = await BookService.update(bookId, update)
    res.json(updatedMovie)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /books/:bookId
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BookService.deleteBook(req.params.bookId)
    const id = req.params.bookId
    res.status(204).json({ deletedBook: id }).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /books/:bookId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findById(req.params.bookId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /books
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let options: bookOptionsType = {}
  let sortBy: sortOptionsType = {}
  //search by title
  if (req.query.title) {
    options = {
      ...options,
      title: RegExp(req.query.title.toString(), 'i'),
    }
  }
  if (req.query.category) {
    options = {
      ...options,
      category: RegExp(req.query.category.toString(), 'i'),
    }
  }
  if (req.query.isbn) {
    options = {
      ...options,
      isbn: RegExp(req.query.isbn.toString(), 'i'),
    }
  }
  if (req.query.sort) {
    sortBy = {
      title: req.query.sort.toString(),
    }
  }

  try {
    res.json(await BookService.findAll(options, sortBy))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
