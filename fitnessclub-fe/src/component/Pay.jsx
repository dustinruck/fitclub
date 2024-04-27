// Pay.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pay.css'; 

const Pay = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value
    });
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulating payment process delay
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page after payment is processed
      navigate('/success');
    }, 2000); // Adjust the delay time as per your requirement
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <div className="credit-card-container">
        <div className="credit-card">
          <div className="chip"></div>
          <div className="card-number">{creditCardInfo.cardNumber}</div>
          <div className="expiration-date">{creditCardInfo.expirationDate}</div>
          <div className="cvv">{creditCardInfo.cvv}</div>
        </div>
      </div>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input 
          type="text" 
          id="cardNumber" 
          name="cardNumber" 
          value={creditCardInfo.cardNumber} 
          onChange={handleInputChange} 
          required 
        />
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input 
          type="text" 
          id="expirationDate" 
          name="expirationDate" 
          value={creditCardInfo.expirationDate} 
          onChange={handleInputChange} 
          required 
        />
        <label htmlFor="cvv">CVV:</label>
        <input 
          type="text" 
          id="cvv" 
          name="cvv" 
          value={creditCardInfo.cvv} 
          onChange={handleInputChange} 
          required 
        />
        <button 
          type="button" 
          onClick={handlePlaceOrder} 
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Pay;
