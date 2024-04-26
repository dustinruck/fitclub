// Header.js // src/component/Header.js //

import { Outlet, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


//import "../CSS/Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              style={{ zIndex: "+1" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe5oBRODC80yLLssXNvXQ7pkiNMH0agfhHA&s"
              width="130"
              height="28"
              alt="GFG"
            />
          </a>

          {/* Burger icon */}
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={`navbar-menu ${isActive ? "is-active" : ""}` }
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            width: "100%",
            transform: isActive ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 2s ease",
            backgroundColor: "#fff", // Adjust as needed
          }}
        >
          <div className="navbar-end ">
            <Link className="navbar-item has-text-weight-semibold has-text-black" to="/classes">
              CLASSES
            </Link>
            <Link className="navbar-item has-text-weight-semibold has-text-black" to="/trainers">
              TRAINERS
            </Link>
            <Link className="navbar-item has-text-weight-semibold has-text-black" to="/payment">
              PAYMENT
            </Link>
            <Link className="navbar-item has-text-weight-semibold has-text-black" to="/user">
              MY PROFILE
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/pricing" className=" has-text-weight-bold button is-dark is-meduim mt-2 check ">CHECK PRICING</Link>

          </div>
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field has-addons">
                <div className="control">
                  <a className="button is-static">
                    <span className="icon">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </a>
                </div>

                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <Link to="/login" className="navbar-item has-text-weight-bold has-text-black">
              LOG IN
            </Link>
            <Link to="/register" className="navbar-item has-text-weight-bold has-text-black">
              BECOME A MEMBER
            </Link>
            <Link className="navbar-item has-text-weight-bold has-text-black">LOG OUT</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
