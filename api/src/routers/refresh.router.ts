import express from 'express'
const router = express.Router()
import { handleRefreshToken } from '../controllers/refresh.controller'

router.get('/', handleRefreshToken)

export default router
