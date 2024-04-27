// Footer.js // src/component/Footer.js //

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered has-text-white">
          <p className="has-text-weight-bold">Copyright © Fitness Club</p>
        </div>

        <div className="columns">
          <div className="column">
            <h4
              className="bd-footer-title  
                 has-text-weight-medium 
                 has-text-left
                 has-text-white"
            >
              FITNESS CLUB
            </h4>

            <p
              className="bd-footer-link  
                has-text-left has-text-white"
            >
              This web application designed and Implemented by Group 4
            </p>
          </div>

          <div className="column">
            <h4
              className="bd-footer-title  
                 has-text-weight-medium  
                 has-text-justify
                 has-text-white"
            >
              Explore
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text has-text-white">
                  <span>Practice</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text has-text-white">
                  <span>Blogs</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text
                has-text-white">
                  <span>Careers</span>
                </span>
              </a>
            </p>
          </div>

          <div className="column">
            <h4
              className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify
                 has-text-white"
            >
              Contact us
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text has-text-white">
                  <span>Email</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text has-text-white">
                  <span>Call Us</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text has-text-white">
                  <span>Chat with us!</span>
                </span>
              </a>
            </p>
          </div>
        </div>
        <div>
       
          <a className="has-text-white">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="has-text-white">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="has-text-white">
          <FontAwesomeIcon icon={faYoutube} />
          </a>

        
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
