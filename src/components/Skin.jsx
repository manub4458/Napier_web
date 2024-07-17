import React from 'react'
import skin from '../images/gift2.webp'

const Skin = () => {
  return (
    <>
      <div className="container">
  <div className="flex-center full-width-height">
    
    <div className="bg-custom2 text-white half-width full-width-small small-space-y-10 small-height-40vh space-y-20 flex-column-center">
      <div className="flex-column-center small-space-y-3">
        <h2 className="text-4xl goudy">Skin & Beauty</h2>
     
      </div>
      <div className="flex-column-center space-y-12 goudy">
        <p className="text-xl">
        Discover our all-natural botanical skincare products. Formulated using only the purest plant extracts & ingredients.
        </p>
        <button className="button-custom">Shop Skin & Beauty</button>
      </div>
    </div>
    <div className="half-width full-width-small">
      <img src={skin} alt="gift" className="image-full" />
    </div>
  </div>
</div>
    </>
  )
}

export default Skin