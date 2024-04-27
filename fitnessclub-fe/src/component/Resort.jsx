import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Resort = ({ resortImages }) => {
  return (
    <>
      <div className="columns is-mobile  ">
        <div className="column is-half is-offset-one-quarter mt-6">
          <p className="is-size-2 has-text-centered has-text-weight-bold has-text-black">
            Resort Environments
          </p>
        </div>
      </div>

      <div className="columns is-mobile  ">
        <div className="column is-half is-offset-one-quarter has-text-black">
          <p className="is-size-6 has-text-centered has-text-black ">
            Fitness is only one aspect of a healthy lifestyle. spend a day at
            the spa, a bite with friends.
            <br />
          </p>
        </div>
      </div>

      <div className="columns is-mobile  has-text-black ">
        <div className="column"></div>
        <Carousel
          autoPlay={true}
          interval={3000}
          className="column is-half is-two-fifths mt-6 slide-custom"
          
        >
          {resortImages.map((imageUrl, index) => (
            <div key={index} style={{ height: "350px" }}>
              <img src={imageUrl} alt={`Slide ${index}`} className="image" />
            </div>
          ))}
        </Carousel>
        <div className="column"></div>
      </div>
    </>
  );
};
export default Resort;
