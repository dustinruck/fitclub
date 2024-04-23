import React from "react";
import "../css/custom.css";
import { Link } from "react-router-dom";

const ChildCare = () => {
  return (
    <div className="container is-flex is-align-items-flex-start  is-flex-wrap-wrap mt-6">
      <div className="columns  mt-6">
        <div className="column is-6">
          <div className="content ">
            <p className="is-size-2 has-text-left has-text-weight-bold has-text-black">
              CHILDCARE INCLUDED WITH FAMILY MEMBERSHIP​​​
            </p>
            <p className="is-size-6 has-text-left has-text-black">
              Experience peace of mind and convenience with our unlimited
              childcare service. Entrust your little ones to our expert
              caregivers while you pursue your fitness goals worry-free. Join
              now to enjoy unrestricted access to our top-notch facilities and
              dedicated childcare support, making fitness a seamless part of
              your family's routine.
              <br />
            </p>
            <Link className=" has-text-weight-bold button is-dark is-meduim mt-2 check">
              DISCOVER CHILDCARE
            </Link>
          </div>
        </div>

        <div className="column is-half ">
          <figure
            className="image  custom-align-right"
            style={{ width: "450px", height: "400px" }}
          >
            <img
              className="image "
              src="https://fernwoodnrg.ca/wp-content/uploads/2018/10/Child-Care-Fernwood-NRG-Victoria-700x467.jpg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default ChildCare;
