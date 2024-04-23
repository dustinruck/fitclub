import React from "react";
import '../css/custom.css';
import { Link } from "react-router-dom";


const Passion = () => {
  return (
    <div className="container is-flex is-align-items-flex-start  is-flex-wrap-wrap mt-6">
      <div className="columns  mt-6" >
        <div className="column is-half ">
          <figure className="image   custom-m-top" style={{width:'550px', height:'400px'}}>
            <img
              className="image "
              src="https://www.theptdc.com/wp-content/uploads/2019/05/CoachVsTrainer_Feature.png"
            />
          </figure>
        </div>
        <div className="column is-6">
          <div className="content ">
            <p className="is-size-2 has-text-left has-text-weight-bold has-text-black">
            your passion for wellness is our mission​
            </p>
            <p className="is-size-6 has-text-left has-text-black">
            At our fitness club, your passion for wellness is our mission. 
            We're committed to providing unlimited access to top-tier facilities, personalized training, and a supportive community dedicated to helping you achieve your fitness goals. 
            Join us today and let us make your journey to health and happiness our priority.
              <br />
            </p>
            <Link className=" has-text-weight-bold button is-dark is-meduim mt-2 check">SCHEDULE A TOUR</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Passion;
