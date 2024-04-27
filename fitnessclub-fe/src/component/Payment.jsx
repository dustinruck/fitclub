import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [successUrl, setSuccessUrl] = useState('');
  const [cancelUrl, setCancelUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/payments/checkout', {
        amount,
        currency,
        successUrl,
        cancelUrl
      });
      setSessionId(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div>
          <label>Success URL:</label>
          <input
            type="text"
            value={successUrl}
            onChange={(e) => setSuccessUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Cancel URL:</label>
          <input
            type="text"
            value={cancelUrl}
            onChange={(e) => setCancelUrl(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
      {sessionId && <p>Session ID: {sessionId}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Payment;
