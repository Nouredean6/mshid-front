// import Footer from "../component/footer/footer";
// import MailList from "../component/mailList/mailList";

import Navbar from "../components/navbar/Navbar";

import TourPage from "../components/tourPage/TourPa";

import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NRms3IZgty6f2DLU3WKgmfiJ3i01CGh1C3U4ddYRjOsrhldr4ioNO5h9Tp2Akf943gWynS1tAXOfz0RGynzvFo900lOoO32uI');

function TourDetails() {
    return (
      <>
        <Navbar />
        <Elements stripe={stripePromise}>
          <TourPage />
        </Elements>

        {/* <MailList />
        <Footer /> */}

    
      </>
    );
  }
  export default TourDetails;