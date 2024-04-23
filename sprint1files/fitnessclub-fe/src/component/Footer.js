

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="has-text-weight-bold">Copyright © Fitness Club</p>
        </div>

        <div className="columns">
          <div className="column">
            <h4
              className="bd-footer-title  
                 has-text-weight-medium 
                 has-text-left"
            >
              FITNESS CLUB
            </h4>

            <p
              className="bd-footer-link  
                has-text-left"
            >
              This web application designed and Implemented by Group 4
            </p>
          </div>

          <div className="column">
            <h4
              className="bd-footer-title  
                 has-text-weight-medium  
                 has-text-justify"
            >
              Explore
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text">
                  <span>Practice</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Blogs</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text has-text-vimeo">
                  <span>Careers</span>
                </span>
              </a>
            </p>
          </div>

          <div className="column">
            <h4
              className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify"
            >
              Contact us
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text">
                  <span>Email</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Call Us</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Chat with us!</span>
                </span>
              </a>
            </p>
          </div>
        </div>
        <div>
       
          <a>
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a>
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a>
          <FontAwesomeIcon icon={faYoutube} />
          </a>

        
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
