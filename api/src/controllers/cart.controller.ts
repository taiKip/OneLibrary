import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Cart, { CartDocument } from '../models/Cart'
import BookService from '../services/book.services'
import CartService from '../services/cart.services'
export const addBookToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId, userId }: { bookId: string; userId: string } = req.body
  try {
    //add to cart
    console.log('USERID:', userId)
    const cart = await Cart.findOne({ user: userId })

    const bookDetails = await BookService.findById(bookId)
    //cart found and book is not reserved
    console.log('CART/n', cart)
    if (cart) {
      console.log('Pushing to cart')
      cart.books.push({
        bookId: bookId,
        title: bookDetails.title,
        thumbnailUrl: bookDetails.thumbnailUrl,
      })
      const updatedCart = await Cart.findByIdAndUpdate(cart._id, cart, {
        new: true,
      })
      console.log('UpdatedCart/n', updatedCart)
      res.status(201).send(updatedCart)
    } else {
      console.log('Created a new Cart')
      const cartData = {
        user: userId,
        books: [
          {
            bookId: bookId,
            title: bookDetails.title,
            thumbnailUrl: bookDetails.thumbnailUrl,
          },
        ],
      }
      const newCart = new Cart(cartData)
      await CartService.create(newCart)

      res.json(bookDetails)
    }

    console.log(bookDetails)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const removeBookFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //add to cart
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
