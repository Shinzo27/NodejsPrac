import React from 'react'
import About from '../Components/About/About'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Expertise from '../Components/Expertise/Expertise'
import Reviews from '../Components/Reviews/Reviews'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Expertise/>
        <Reviews/>
    </>
  )
}

export default Home