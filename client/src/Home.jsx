import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"


const Home = () => {


  const checkoutHandler=async (amount)=>{

    const {data:{key}}=await axios.get("http://localhost:5000/api/getKey")

    const {data:{order}}=await axios.post("http://localhost:5000/api/checkout",{
      amount
    })
    
    const options = {
      key, 
      amount: order.amount,
      currency: "INR",
      name: "Rohit Ganguly",
      description: "Test transaction",
      image: "https://avatars.githubusercontent.com/u/134062997?v=4",
      order_id: order.id,
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      },
      callback_url: "http://localhost:5000/api/paymentverification"
  };
  var rzp = new window.Razorpay(options);
  rzp.open();
  }

  return (
    <>
      <Box>
        <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column","row"]} >
          <Card amount={5000} img={"photo.jpeg"} checkoutHandler={checkoutHandler}/>
          <Card amount={1000} img={"photo1.jpeg"} checkoutHandler={checkoutHandler}/>
        </Stack>
      </Box>
    </>
  )
}

export default Home