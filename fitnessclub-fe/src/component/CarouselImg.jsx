import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carousel.css';
const CarouselImg = ({ images }) => {
  return (
    <div className="container  mt-6 is-fluid">
     
      <Carousel autoPlay={true} interval={3000} className="mt-3" >
        {images.map((imageUrl, index) => (
          <div key={index} style={{ height: '650px' }}>
            <img src={imageUrl} alt={`Slide ${index}`} className="image fullwidth" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
