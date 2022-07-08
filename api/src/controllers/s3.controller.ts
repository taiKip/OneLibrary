import { generateUploadUrl } from '../services/s3.service'
import {Request,Response} from 'express'
export const handleGetS3Url = async (req:Request, res:Response) => {
  const url = await generateUploadUrl()
  res.send({ url })
}

