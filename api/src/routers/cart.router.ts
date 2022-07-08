import express from 'express'
import { USER } from './../util/secrets'
import { verifyRoles } from './../middlewares/verifyRoles'
import {
    addBookToCart,
    removeBookFromCart
} from '../controllers/cart.controller'

const router = express.Router()

// Every path we define here will get /api/v1/cart prefix
router.get('/',verifyRoles([+USER]), addBookToCart)
router.get('/:bookId',verifyRoles([+USER]), removeBookFromCart)


export default router
