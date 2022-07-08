import express from 'express'
const router = express.Router()
import { handleLogout } from '../controllers/logout.controller'

router.get('/',handleLogout)

export default router
