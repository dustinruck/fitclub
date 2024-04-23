import { Form } from "react-router-dom";
import Header from "./Header";
import React from "react";
const Register = () => {
    const handelSignup = ()=>{

    };
  return (
    <>
      <Header />
      <form onSubmit={handelSignup}></form>
      <div
        className="container box p-6 mt-6
                has-background-light"
      >
        <h1
          className="title has-text-centered 
                 has-text-black"
        >
          Become A Memeber
        </h1>
        <h2 className="subtitle has-text-centered">
          you are one step away from sending you a quotation
        </h2>
        <form action="">
          <div className="field">
            <label className="label">Name</label>
            <div
              className="control has-icons-left 
                      has-icons-right"
            >
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div
              className="control has-icons-left 
                      has-icons-right"
            >
              <input
                className="input "
                type="text"
                placeholder="Enter your last name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div
              className="control has-icons-left 
                      has-icons-right"
            >
              <input
                className="input is-danger"
                type="email"
                placeholder="Enter your email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div
              className="control has-icons-left 
                      has-icons-right"
            >
              <input
                className="input is-danger"
                type="password"
                placeholder="Enter your password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number</label>
            <div
              className="control has-icons-left 
                      has-icons-right"
            >
              <input
                className="input is-danger"
                type="password"
                placeholder="Enter your phone number"
              />
              <span className="icon is-small is-left">
                <i class="fa-solid fa-phone"></i>
              </span>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-dark">
                Sign up
              </button>
            </div>
            <div className="control">
              <button className="button  is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
