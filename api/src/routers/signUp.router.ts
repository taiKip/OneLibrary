import express from 'express'
const router = express.Router();
import  {handleNewUser} from '../controllers/signUp.controller'

router.post('/', handleNewUser)

export default router