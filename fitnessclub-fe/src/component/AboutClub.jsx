import React from "react";
import "../css/custom.css";
import { Link } from "react-router-dom";

const AboutClub = () => {
  return (
    <div className="container mt-6" style={{width:'600px'}}>
      <div className="content has-text-black mt-6">
        <div>
          <p className="is-size-2 has-text-centered has-text-white has-text-weight-bold mt-6">
            Elevate Your Fitness, Unleash Your Potential
          </p>
        </div>
        <div>
          <p className="is-size-6 has-text-centered has-text-white mt-6">
            At our fitness club, we're dedicated to revolutionizing your
            wellness journey. With unlimited access, cutting-edge equipment, and
            expert guidance, we're committed to helping you surpass your fitness
            goals. Join our vibrant community today and discover a new standard
            of health and vitality.
            <br />
          </p>
        </div>
        <div className="columns  ">
          <div className="column is-2"></div>
          <div className="column is-2"></div>
          <div className="column is-2   is-centered">
          <Link className=" has-text-weight-bold button is-dark is-meduim  check mt-6 mb-6  ">
              SCHEDULE A TOUR
            </Link>
          </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
