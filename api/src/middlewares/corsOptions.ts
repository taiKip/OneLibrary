
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials:true,
}



export default corsOptions;