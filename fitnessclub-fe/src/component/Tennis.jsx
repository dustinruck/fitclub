import React from "react";
import '../css/custom.css';
import { Link } from "react-router-dom";


const Tennis = () => {
  return (
    <div className="container is-flex is-align-items-flex-start  is-flex-wrap-wrap mt-6">
      <div className="columns  mt-6" >
        <div className="column is-half ">
          <figure className="image  " style={{width:'550px', height:'400px'}}>
            <img
              className="image "
              src="https://www.forcalgarylovers.com/images/places/fdc8c5877f654d984c3054dff82810c4-the-city-of-calgary-north-glenmore-park-tennis-courts-0.jpg"
            />
          </figure>
        </div>
        <div className="column is-6 ">
          <div className="content has-text-black">
            <p className="is-size-2 has-text-left has-text-weight-bold has-text-white">
              TENNIS, THE GAME YOU'LL LOVE FOR LIFE​
            </p>
            <p className="is-size-6 has-text-left has-text-white">
              Serve up your best game with our unbeatable offer of unlimited
              access to our premier tennis club. Smash your way to success on
              our top-notch courts, hone your skills with professional coaching,
              and enjoy a vibrant tennis community.
              <br />
            </p>
            <Link className=" has-text-weight-bold button is-dark is-meduim mt-2 check mt-6">DISCOVER TENNIS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tennis;
