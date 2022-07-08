import aws from 'aws-sdk'
import crypto from 'crypto'
import dotenv from 'dotenv'
import { promisify } from 'util'

dotenv.config();
const randomBytes = promisify(crypto.randomBytes)
const region = "EU (Stockhom) eu-north-1";
const bucketName ="T-OpenLibrary"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_ACCESS_SECRET_ACCESS_KEY



const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion:"v4"
})

export const generateUploadUrl = async() => {
   
const imageName = await randomBytes(16).toString()
    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires:60,
    })

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    return uploadUrl;
}