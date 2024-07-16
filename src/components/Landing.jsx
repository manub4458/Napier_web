import React from 'react'
import Header from './Header'
import '../styles/main.css'
import CustomSlider from './Slider'
import Hero from './Hero'

import Products from './Products'
import Gifts from './Gifts'

const Landing = () => {
  return (
    <>
    <Header />
     <Hero />
     <Products />

    <CustomSlider />
    <Gifts />
    </>
  )
}

export default Landing