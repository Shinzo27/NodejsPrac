import express from 'express'
import paymentRouter from './Route/Payment.js'

import { config } from 'dotenv'
import cors from 'cors'
config({ path: './Config/.env'})

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/payment", paymentRouter)

app.get("/api/getkey", (req,res)=>{
    res.status(200).json({ key: process.env.RAZORPAY_SECRET_KEY})
})