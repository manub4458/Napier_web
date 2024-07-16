import React from 'react'
import gift from '../images/gift1.webp'
import gift2 from '../images/gift2.webp'

const Gifts = () => {
    return (
        <>
            <div className='container_gifts'>
                <div className='child_container_gifts'>
                    <div className='child_container_gifts_img'>
                        <img src={gift} alt="" className='gift_img' />
                    </div>
                    <div className='child_container_gift_text'>
                        <h2>
                            Gifts and Sets
                        </h2>
                        <span>
                            Ideal for both special occasions & self-indulgence. From luxurious creams & serums to hydrating oils and essences.
                        </span>
                        <button>
                            Shop Gifts
                        </button>
                    </div>
                </div>
                <div className='child_container_gifts2'>
                    <div className='child_container_gift_text'>
                        <h2 className='heading'>
                            Skin and Beauty
                        </h2>
                        <span>
                            Discover our all-natural botanical skincare products. Formulated using only the purest plant extracts & ingredients.
                        </span>
                        <button>
                            Shop Skin and Beauty
                        </button>
                    </div>
                    <div
                        className='child_container_gifts_img'
                    >
                        <img src={gift2} alt="" className='gift_img' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gifts