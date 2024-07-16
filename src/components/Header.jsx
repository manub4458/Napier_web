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
              <span className="dropbtn">Shop &#9662;</span>
              <div className="dropdown-content">
                <div className='dropmenu'>
                  <div>
                    <div className='leftcontent'>
                      <span>Shop All Collections</span>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />

                    </div>
                    <div className='hr'></div>
                    <div className='leftcontent'>
                      <span>Best Sellers</span>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />
                    </div>
                    <div className='hr'></div>

                    <div className='leftcontent'>
                      <span>offers</span>
                      <img src={arrow} alt="Arrow"
                        height={20} width={20}
                        className='arrow'
                      />
                    </div>

                  </div>

                  <div className='listing'>
                    <li>Shop All Products</li>
                    <li>Herbal Tinctures</li>
                    <li>Herbal Remedies</li>
                    <li>Beauty & Skincare</li>
                    <li>Aromatherapy</li>
                    <li>Health & Wellbeing</li>
                  </div>
                </div>
              </div>
            </li>
            <li>Prescriptions</li>
            <li>Napiers</li>
            <li>Book a Therapy</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="header-icons">
          <span >Search</span>
          <span >Sign in</span>
          <span >Cart </span>
        </div>
      </header>

    </>
  )
}

export default Header