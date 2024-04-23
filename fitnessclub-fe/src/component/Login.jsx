import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import  '../css/login.css';
const Login = () => {
  return (
    <>
      <Header />

      <div className="login-container ">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-medium"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-dark is-fullwidth">Login</button>
          </p>
        </div>
        <div className="field">
          <p className="control">
              <a className="has-text-black has-text-weight-semibold">
                Forget Password
              </a>
              <p>  </p>
              <a className="has-text-black has-text-weight-semibold">
                Create Account
              </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
