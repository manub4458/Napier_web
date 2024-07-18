import React from 'react'
import fb from '../images/facebook2.png'
import instagram from '../images/insta.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
const Footer = () => {
  return (
   <>
  <footer>
<div className='footer'>
<div className='heading_footer'>
      <h1>
        Ancient Health
      </h1>
      <p>
      Embrace Timeless Wellness with Ayurvedic Wisdom
      </p>
     </div>
     <div className='footer_second'>
     <div>
     <li>Bestsellers</li>
       <li>Offers</li>
       <li>Gifts and Sets</li>
       <li>Herbal Tinctures</li>
       <li>Dried Herbs</li>
       <li>Beauty & Skincare</li>
       <li>Aromatherapy</li>
       <li> Health & Wellbeing</li>
       <li> Gift Cards</li>
     </div>
     <div>
     <li>Our Story</li>
       <li>Offers</li>
       <li>Gifts and Sets</li>
       <li>Herbal Tinctures</li>
       <li>Dried Herbs</li>
       <li>Beauty & Skincare</li>
       <li>Aromatherapy</li>
       <li> Health & Wellbeing</li>
       <li> Gift Cards</li>
     </div>
     <div>
     <li>Bestsellers</li>
       <li>Offers</li>
       <li>Gifts and Sets</li>
       <li>Herbal Tinctures</li>
       <li>Dried Herbs</li>
       <li>Beauty & Skincare</li>
       <li>Aromatherapy</li>
       <li> Health & Wellbeing</li>
       <li> Gift Cards</li>
     </div>
     </div>

     <div>
        <div className='footer_socials'>
           <img src={fb} alt="" />
           <img src={instagram} alt="" />
           <img src={youtube} alt="" />
           <img src={twitter} alt="" />


            
           
        </div>
     </div>
</div>
<hr />
<div className='bottom'>
     <div>
      <select name="" id="">
        <option value="">India</option>
      </select>
     </div>
     <div className='bottom_list'>
      <li>Site terms</li>
      <li>Privacy Policy</li>
      <li>Shipping Policy</li>
      <li>Refund Policy</li>
     </div>
     <div>
      <h3>
        &copy; Ancient Health
      </h3>
     </div>
</div>
  </footer>
 
   </>
  )
}

export default Footer