import React from 'react'
import arrow from '../images/arrow.png'

const Header = () => {
  return (
    <>
     
      <header>
        <div className="logo">
          <img src="" alt="Napier Logo" />
        </div>
        <nav>
          <ul>
            <li className="dropdown">
              <a href="#" className="dropbtn">Shop &#9662;</a>
              <div className="dropdown-content">
                <div className='dropmenu'>
                  <div>
                    <div className='leftcontent'>
                      <a href="#">Shop All Collections</a>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />

                    </div>
                    <div className='hr'></div>
                    <div className='leftcontent'>
                      <a href="#">Best Sellers</a>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />
                    </div>
                    <div className='hr'></div>

                    <div className='leftcontent'>
                      <a href="#">offers</a>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />
                    </div>

                  </div>

                  <div className='listing'>
                    <a href="#">Shop All Products</a>
                    <a href="#">Herbal Tinctures</a>
                    <a href="#">Herbal Remedies</a>
                    <a href="#">Beauty & Skincare</a>
                    <a href="#">Aromatherapy</a>
                    <a href="#">Health & Wellbeing</a>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Prescriptions</a></li>
            <li><a href="#">Napiers</a></li>
            <li><a href="#">Book a Therapy</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="#">Search</a>
          <a href="#">Sign in</a>
          <a href="#">Cart</a>
        </div>
      </header>

    </>
  )
}

export default Header