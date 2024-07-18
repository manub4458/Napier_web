import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
// import "./Slide.css";
// import { Slide } from "./Slide";
import '../styles/carousel.css'
import { Slide } from "./Slide";

const data = [
  {
    image: "/product_main1.jpg",
  
  },
  {
    image: "/product_main1.jpg",

  },
  {
    image: "/product_main1.jpg",

  },
  {
    image: "/product_main1.jpg",

  },
  {
    image: "/product_main1.jpg",

  }
];

const Carousel = () => {
  const ref = React.useRef(StackedCarousel);
  return (
   <>
    <div className="stack">
        <h1>Explore and shop</h1>
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={200}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
      </div>
    </div>
   </>
  );
};

export default Carousel;
