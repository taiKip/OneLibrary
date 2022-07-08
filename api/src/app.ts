import { verifyJWT } from './middlewares/verifyJWT';
import express from 'express'
const cookieParser = require('cookie-parser')
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'

import cors from 'cors';
import options from './middlewares/corsOptions'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import signUpRouter from './routers/signUp.router'
import authRouter from './routers/auth.router'
import bookRouter from './routers/book.router'
import authorRouter from './routers/author.router'
import cartRouter from './routers/cart.router'
import s3BucketRouter from './routers/s3bucket.router'
import userRouter from './routers/user.router'
import categoryRouter from './routers/category.router'
import refreshRouter from './routers/refresh.router'
import logoutRouter from './routers/logout.router'
dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
//Cors middleware
app.use(cors(options))

//cookie middleware
app.use(cookieParser())
// Set up routers
app.use('/api/v1/signUp', signUpRouter)
app.use('/api/v1/signIn', authRouter)
app.use('/api/v1/refresh', refreshRouter)
app.use('/api/v1/logout',logoutRouter)

app.use(verifyJWT)

app.use('/api/v1/books', bookRouter)
app.use('/api/v1/authors', authorRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/upload', s3BucketRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/categories',categoryRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
