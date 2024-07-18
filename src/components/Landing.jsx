import React from 'react'
import Header from './Header'
import '../styles/main.css'
import CustomSlider from './Slider'
import Hero from './Hero'

import Products from './Products'
// import Gifts from './Gifts'
import Gift from './Gift'
import Skin from './Skin'
import ShopBy from './ShopBy'
import Footer from './Footer'

const Landing = () => {
  return (
    <>
    <Header />
     <Hero />
     <Products />

    <CustomSlider />
    {/* <Gifts /> */}
    <Gift />
    <Skin />
    <ShopBy />
    <Footer />
    </>
  )
}

export default Landing