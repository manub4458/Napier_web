import React from 'react'
import health from '../images/health.avif'
import arrow from '../images/arrow.png'
import sleep from '../images/sleep.avif'
import meno from '../images/meno.avif'
const ShopBy = () => {
  return (
   <>
   <div className='concern_container'>
   <div className='child_concern_container'>
    <h1>
        Shop By
    </h1>
    <h1>
        Concern
    </h1>
    <p>
    Explore our carefully curated collection of natural products, skincare & supplements. We stock only tried, tested and trusted brands.
    </p>

    <button className='btn_shop'>
        Shop All
    </button>
   </div>

   <div className='second_child_concern_container'>
    <div className='health'>
   <div>
    <img src={health} alt="" className='health_img'/>
   </div>
   <div>
    <h2>
        Immune Health
    </h2>
    <p>
        From herbal blends to immune-boosting 
        vitamins & supplements
    </p>
   <div className='shop_health'>
   <span>
        Shop Immune Health
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    <div className='health'>
   <div>
    <img src={sleep} alt=""  className='health_img'/>
   </div>
   <div>
    <h2>
        Sleep, Stress & Mood
    </h2>
    <p>
        Support regular sleep, manage stress & 
        promote a  balance mood.
    </p>
   <div className='shop_health'>
   <span>
        Shop Sleep, Stress & Mood
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    <div className='health'>
   <div>
    <img src={meno} alt="" className='health_img'/>
   </div>
   <div>
    <h2>
        Menopause Support
    </h2>
    <p>
        Support your menopause with natural 
        creams, herbs & supplements
    </p>
   <div className='shop_health'>
   <span>
        Shop Menopause Support
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    
   </div>

   <div className='second_child_concern_container'>
    <div className='health'>
   <div>
    <img src={health} alt="" className='health_img'/>
   </div>
   <div>
    <h2>
        Immune Health
    </h2>
    <p>
        From herbal blends to immune-boosting 
        vitamins & supplements
    </p>
   <div className='shop_health'>
   <span>
        Shop Immune Health
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    <div className='health'>
   <div>
    <img src={sleep} alt=""  className='health_img'/>
   </div>
   <div>
    <h2>
        Sleep, Stress & Mood
    </h2>
    <p>
        Support regular sleep, manage stress & 
        promote a  balance mood.
    </p>
   <div className='shop_health'>
   <span>
        Shop Sleep, Stress & Mood
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    <div className='health'>
   <div>
    <img src={meno} alt="" className='health_img'/>
   </div>
   <div>
    <h2>
        Menopause Support
    </h2>
    <p>
        Support your menopause with natural 
        creams, herbs & supplements
    </p>
   <div className='shop_health'>
   <span>
        Shop Menopause Support
    </span>
    <img src={arrow} alt=""  width={40} height={40}/>
   </div>
   </div>
    </div>
    
   </div>
 
   </div>
   
   </>
  )
}

export default ShopBy