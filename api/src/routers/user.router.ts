import express from 'express'

import { USER, ADMIN } from './../util/secrets'
import { verifyRoles } from './../middlewares/verifyRoles'

import {
  findById,
  deleteUser,
  findAll,
  updateUser,
} from '../controllers/user.controller'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.get('/',verifyRoles([+ADMIN]), findAll)
router.get('/:userId',verifyRoles([+ADMIN]), findById)
router.put('/:userId', verifyRoles([+ADMIN]), updateUser)
router.delete('/:userId',verifyRoles([+ADMIN]), deleteUser)


export default router
