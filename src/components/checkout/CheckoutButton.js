// import axios from 'axios';
// import { useStripe } from '@stripe/react-stripe-js';
// import { BACKEND_URL } from '../../utils/react-backend-url';
// import { useParams } from "react-router-dom";

// const CheckoutButton = () => {
//   const {id} = useParams();

//   const stripe = useStripe();
  

//   const handleClick = async (id) => {
//     try {
//       const response = await axios.get(`${BACKEND_URL}/api/v1/bookings/checkout-session/${id}`);
//       const session = response.data;
//       console.log(session);

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