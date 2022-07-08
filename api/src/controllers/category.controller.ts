import { Request, Response, NextFunction } from 'express'

import Category from '../models/Category'
import categoryService from '../services/category.service'
import { BadRequestError } from '../helpers/apiError'

// POST /authors
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name,books } = req.body

    const category = new Category({
      name,
      books
    })

    await categoryService.createCategory(category)
    res.json(category)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /Categorys/:CategoryId
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const categoryId = req.params.CategoryId

    const updatedCategory = await categoryService.updateCategory(categoryId, update)
    res.json(updatedCategory)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /movies/:CategoryId
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await categoryService.deleteCategory(req.params.CategoryId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /Categorys/:CategoryId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await categoryService.findById(req.params.categoryId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /Categorys
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let options = {}

  if (req.query.name) {
    options = {
      ...options,
      name: RegExp(req.query.name.toString(), 'i'),
    }
  }
  try {
    res.json(await categoryService.findAll(options))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
