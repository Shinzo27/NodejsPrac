import express from 'express'
import paymentRouter from './Route/Payment.js'

import { config } from 'dotenv'
import cors from 'cors'
config({ path: './Config/.env'})

export const app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/payment", paymentRouter)

app.get("/api/getkey", (req,res)=>{
    res.status(200).json({ key: process.env.RAZORPAY_SECRET_KEY})
})