import React from 'react'

const ProductTemp = ({ image, product_title,price}) => {
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
        RS.{
            price
        }
     </h2>

  </h3>
 
  <span  className="buy">Buy Now</span>
</div>

</div>
    </>
  )
}

export default ProductTemp