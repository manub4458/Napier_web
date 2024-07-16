import React from 'react'
// import Product_card from './Product_card'
// import product1 from '../images/product1.webp'
// import product2 from '../images/product2.webp'
// import product4 from '../images/product4.png'
// import product_main1 from '../images/product_main1.jpg'
// import product_main2 from '../images/product_main2.jpg'
// import main from '../images/main_product.jpg'
import product10 from '../images/product10.png'
import ProductTemp from './ProductTemp'
// import Product_temp from './ProductTemp'




const Products = () => {
    return (
        <>
            {/* <div
                className='products'
            >
                <div>
                    <Product_card
                        image={product4}
                        price="Rs.2,119.87"
                        product_title="GLOWVEDA"
                        product_description="Skin Care Juice"
                    />
                </div>
                <div>
                    <Product_card
                        image={product_main2}
                        price="Rs. 3,178.66"
                        product_description="Napiers Phytologic Happy Gut Capsules"
                    />
                </div>
                <div>
                    <Product_card
                        image={main}
                        price="Rs. 1270.80"
                        product_description="Napiers Goodnight Blend"
                    />
                </div>
                <div>
                    <Product_card
                        image={main}
                        price="Rs. 1270.80"
                        product_description="Napiers Goodnight Blend"
                    />
                </div>
                <div>
                    <Product_card
                        image={main}
                        price="Rs. 1270.80"
                        product_description="Napiers Goodnight Blend"
                    />
                </div>


            </div> */}

            <div
            className='products'
            >
               <div>
               <ProductTemp
                image={product10}
                price="2100"
                product_title="GLOWVEDA"
                
                
                />
               </div>
               <div>
               <ProductTemp
                image={product10}
                price="2100"
                product_title="GLOWVEDA"
                
                
                />
               </div>
               <div>
               <ProductTemp
                image={product10}
                price="2100"
                product_title="GLOWVEDA"
                
                
                />
               </div>
               <div>
               <ProductTemp
                image={product10}
                price="2100"
                product_title="GLOWVEDA"
                
                
                />
               </div>

            </div>
        </>
    )
}

export default Products