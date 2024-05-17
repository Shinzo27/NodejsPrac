import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {
  
  const checkoutHandler = async (amount) => {

    // const { data: { key } } = await axios.get("http://www.localhost:8000/api/getkey")
    const key = 'KRGpin9ztsG3ZYw6rpTk0gSt'

    const { data: { order } } = await axios.post("http://localhost:8000/api/v1/payment/checkout", {
        amount
    })
    console.log(order.amount);

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Patel's Dryfruit And Masala",
        description: "Store",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Favatar&psig=AOvVaw0YQSOAFMy3UC2-rdxUX99d&ust=1716018986345000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCBoIKblIYDFQAAAAAdAAAAABAE",
        order_id: order.id,
        callback_url: "http://localhost:8000/api/v1/payment/paymentVerification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }

  return (
    <Box>

        <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
            <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

        </Stack>
    </Box>
  )
}

export default Home