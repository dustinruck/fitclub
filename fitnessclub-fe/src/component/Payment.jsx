// import React, { useState } from 'react';
// import axios from 'axios';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useLocation } from "react-router-dom";



const Payment = () => {
<p class="has-text-white">This is the payment page.</p>
};

// const Payment = () => {
  // const location = useLocation();
  // const { price } = location.state || {}; // empty if no state is passed
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [sessionId, setSessionId] = useState('');
  
//   const stripe = useStripe();
//   const elements = useElements();

//   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTcxNDE4NjQxNywiZXhwIjoxNzE0MjcyODE3fQ.oHGna9gv44V3-LNDjJRcXZz1v68AGdsC1ZY_eW2oJDo'; // Replace with your Stripe secret key

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setError('Stripe.js has not yet loaded.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Create a payment method using the card element
//       const { paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//       });

//       // Send payment method to your server to process the payment
//       const response = await axios.post('http://localhost:8080/api/payments/checkout', {
//         amount: 1000, // amount in cents (e.g., $10.00)
//         currency: 'usd',
//         success_url: 'http://localhost:3000/success', // Replace with your success URL
//         cancel_url: 'http://localhost:3000/cancel', // Replace with your cancel URL
//         payment_method_id: paymentMethod.id,
//       }, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       // Assuming the response contains a session ID
//       setSessionId(response.data.sessionId); // Update with the correct response data structure
//     } catch (error) {
//       setError(error.message || 'An error occurred while processing the payment.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Payment Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Card Details:</label>
//           <CardElement />
//         </div>
//         <button type="submit" disabled={!stripe || loading}>
//           {loading ? 'Processing...' : 'Pay Now'}
//         </button>
//       </form>
//       {sessionId && <p>Session ID: {sessionId}</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

export default Payment;
