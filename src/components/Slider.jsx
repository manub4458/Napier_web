import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 // Import the CSS file for custom styles

const items = [
  { icon: '/herbal.png', label: 'Herbal Tinctures' },
  { icon: '/herbal.png', label: 'Dried Herbs' },
  { icon: '/herbal.png', label: 'Herbal Tea' },
  { icon: '/herbal.png', label: 'Aromatherapy' },
  { icon: '/herbal.png', label: 'Health & Wellbeing' },
  { icon: '/herbal.png', label: 'Tincture Blends' },
  { icon: '/herbal.png', label: 'Natural Allergy Relief Supplements' },
];

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    afterChange: index => setActiveIndex(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
    <div className='collection'>
        <h1>
            Explore Collections
        </h1>
    </div>
    <div className="slider-container slide">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.icon} alt={item.label} 
            
            />
            <p className='label'>{item.label}</p>
          </div>
        ))}
      </Slider>
      <div className="slider-line">
        <div
          className="slider-progress"
          style={{
            width: `${((activeIndex + 1) / items.length) * 100}%`
          }}
        />
      </div>
    </div>
    </>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CustomSlider;
