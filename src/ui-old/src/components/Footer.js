// Footer //

import React from 'react';

const Footer = () => {
    return (
      <footer className="myfooter py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h5>Reach Us</h5>
            <ul className="list-unstyled">
                <li>Address: 551 Avenue du Mont Royal Est, 3e Etage</li>
                <li>Montreal, Quebec</li>
            </ul>
            </div>
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: example@example.com</li>
                <li>Phone: 123-456-7890</li>
              </ul>
            </div>
            <div className="col-md-3">
            <ul className="list-unstyled">
                <div className="footer-copyright text-right py-3">© 2020 Copyright: ZEN</div>
            </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
