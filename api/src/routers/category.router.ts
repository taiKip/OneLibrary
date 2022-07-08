import express from 'express'

import { USER, ADMIN } from './../util/secrets'
import { verifyRoles } from './../middlewares/verifyRoles'
import {
  createCategory,
  findById,
  deleteCategory,
  findAll,
  updateCategory,
} from '../controllers/category.controller'

const router = express.Router()

// Every path we define here will get /api/v1/Categorys prefix
router.get('/', verifyRoles([+USER]), findAll)
router.get('/:categoryId', verifyRoles([+USER]), findById)
router.put('/:categoryId', verifyRoles([+ADMIN]), updateCategory)
router.delete('/:CategoryId', verifyRoles([+ADMIN]), deleteCategory)
router.post('/', verifyRoles([+ADMIN]), createCategory)

export default router

