import React from 'react'
// import product1 from '../images/product1.webp'
const Product_card = ({ image, price, product_description, product_title }) => {
    return (
        <>
            <div
                className='product'
            >
                <div

                >
                    <img src={image} alt=""
                        className='product_img'
                    />
                </div>



             
             <div className='product_qualities'>
             <div className='price'>
                    <span>
                        {price}
                    </span>
                </div>

                <div>
                    <span>
                        {
                            product_title
                        }
                    </span>
                </div>

                <div className='
        
                           product_info'>



                    <span className='description'>
                        {
                            product_description
                        }
                    </span>



                </div>
             </div>
            </div>

        </>
    )
}

export default Product_card