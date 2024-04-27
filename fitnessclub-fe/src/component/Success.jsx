/* SuccessPage.js */
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pay.css'; 

const Success = () => {
  return (
    <div className="success-page">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Success;