import express from 'express'
import { USER, ADMIN } from './../util/secrets'
import { verifyRoles } from './../middlewares/verifyRoles'
import {
  createAuthor,
  findById,
  deleteAuthor,
  findAll,
  updateAuthor,
} from '../controllers/author.controller'


const router = express.Router()

// Every path we define here will get /api/v1/Authors prefix
router.get('/',verifyRoles([+USER]), findAll)
router.get('/:authorId',verifyRoles([+USER]), findById)
router.put('/:authorId', verifyRoles([+ADMIN]), updateAuthor)
router.delete('/:authorId', verifyRoles([+ADMIN]), deleteAuthor)
router.post('/',verifyRoles([+ADMIN]), createAuthor)

export default router
