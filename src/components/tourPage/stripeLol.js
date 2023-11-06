// npm install @stripe/react-stripe-js @stripe/stripe-js


// import React from 'react';
// import axios from 'axios';
// import { useStripe } from '@stripe/react-stripe-js';

// const CheckoutButton = () => {
//   const stripe = useStripe();

//   const handleClick = async () => {
//     try {
//       const response = await axios.post('/create-checkout-session');
//       const session = response.data;

//       const { error } = await stripe.redirectToCheckout({
//         sessionId: session.sessionId,
//       });

//       if (error) {
//         console.error('Error:', error);
//       }
//     } catch (error) {
//       console.error('Error creating Checkout Session:', error);
//     }
//   };

//   return (
//     <button onClick={handleClick}>Checkout</button>
//   );
// };

// export default CheckoutButton;


// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutButton from './CheckoutButton';

// const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

// function App() {
//   return (
//     <div className="App">
//       <h1>My Stripe App</h1>
//       <Elements stripe={stripePromise}>
//         <CheckoutButton />
//       </Elements>
//     </div>
//   );
// }

// export default App;
