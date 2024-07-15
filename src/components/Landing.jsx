import React from 'react'
import Header from './Header'
import '../styles/main.css'
import CustomSlider from './Slider'
import Hero from './Hero'
import Product_card from './Product_card'
import Products from './Products'
import Product_temp from './Product_temp'
const Landing = () => {
  return (
    <>
    <Header />
     <Hero />
     <Products />
     {/* <Product_temp /> */}
     {/* <Product_card /> */}
    <CustomSlider />
    </>
  )
}

export default Landing