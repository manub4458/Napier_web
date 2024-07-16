import React from 'react'
import gift from '../images/gift1.webp'

const Gift = () => {
  return (
   <>
   <div className="container">
  <div className="flex-center full-width-height">
    <div className="half-width full-width-small">
      <img src={gift} alt="gift" className="image-full" />
    </div>
    <div className="bg-custom text-white half-width full-width-small small-space-y-10 small-height-40vh space-y-20 flex-column-center">
      <div className="flex-column-center small-space-y-3">
        <h2 className="text-4xl goudy">Gifts & Sets</h2>
     
      </div>
      <div className="flex-column-center space-y-12 goudy">
        <p className="text-xl">
        Ideal for both special occasions & self-indulgence. From luxurious creams & serums to hydrating oils and essences.
        </p>
        <button className="button-custom">Shop Gifts</button>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Gift