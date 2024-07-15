import React from 'react'
import product1 from '../images/product_main1.jpg'
const Product_temp = ({ image, product_title,price}) => {
  return (
    <>
    <div className="card">

<div className="imgBox">
  <img src={image} alt="mouse corsair" className="mouse"/>
</div>

<div className="contentBox">
  <h3>
    {
        product_title
    }
     <h2>
        {
            price
        }
     </h2>

  </h3>
 
  <a href="#" className="buy">Buy Now</a>
</div>

</div>
    </>
  )
}

export default Product_temp