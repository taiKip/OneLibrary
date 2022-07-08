import { USER, ADMIN } from './../util/secrets';
import { verifyRoles } from './../middlewares/verifyRoles';
import express from 'express'

import {
  createBook,
  findById,
  deleteBook,
  findAll,
  updateBook,
} from '../controllers/book.controller'

const router = express.Router()


// Every path we define here will get /api/v1/Books prefix
router.get('/',verifyRoles([+USER]), findAll)
router.get('/:bookId',verifyRoles([+USER]), findById)
router.put('/:bookId',verifyRoles([+ADMIN]), updateBook)
router.delete('/:bookId',verifyRoles([+ADMIN]), deleteBook)
router.post('/', verifyRoles([+ADMIN]),createBook)



export default router
