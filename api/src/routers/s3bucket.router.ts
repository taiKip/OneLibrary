import express from 'express'
import {handleGetS3Url}  from '../controllers/s3.controller'
const router = express.Router()


router.get('/', handleGetS3Url)
export default router