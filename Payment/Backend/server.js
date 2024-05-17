import { app } from "./app.js";
import Razorpay from 'razorpay'

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_SECRET_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

app.listen(8000, () =>
    console.log(`Server is working on 8000`)
);
