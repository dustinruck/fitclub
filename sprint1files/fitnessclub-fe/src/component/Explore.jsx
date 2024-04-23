import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import '../css/custom.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Explore = ({fitnessImages}) => {
  return (
    <>
      <div className="columns is-mobile  ">
        <div className="column is-half is-offset-one-quarter mt-6">
          <p className="is-size-2 has-text-centered has-text-weight-bold has-text-black">
            Unlimited Classes
          </p>
        </div>
      </div>

      <div className="columns is-mobile  ">
        <div className="column is-half is-offset-one-quarter">
          <p className="is-size-6 has-text-centered has-text-black ">
            Unlock your fitness potential with our exclusive offer of unlimited
            access to our fitness club. Embrace a healthier lifestyle and
            achieve your goals with unrestricted gym access and a wide range of
            classes tailored to your needs.
            <br />
          </p>
        </div>
      </div>

      <div className="columns is-mobile   ">
        <div className="column"></div>
        <Carousel
          autoPlay={true}
          interval={3000}
          className="column is-half is-two-fifths mt-6"
         
        >
          {fitnessImages.map((imageUrl, index) => (
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
export default Explore;
