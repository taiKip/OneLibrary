import { Request, Response, NextFunction } from 'express'
import { ForbiddenError } from '../helpers/apiError'
import User from '../models/User'

const jwt = require('jsonwebtoken')

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(401)

  const refreshToken = cookies.jwt
  const foundUser = await User.findOne({ refreshToken }).exec()
  if (!foundUser) return res.sendStatus(403) //forbiddden
const roles = Object.values(foundUser.roles)
  
      try {
    
        const decoded = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET as string
        )
          if (foundUser.email !== decoded.email) throw new ForbiddenError();
        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: decoded.email,
              roles:roles
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '600s' }
        )
          res.json({accessToken})
      } catch (error) {
        throw new ForbiddenError()
      }

}
