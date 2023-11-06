import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/features/auth/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import Dashboard from './features/auth/admin/Dashboard';
import AddTour from './features/auth/admin/pages/AddTour';
import Sidebar from './components/sidebar/Sidebar';
import EditTour from './features/auth/admin/pages/EditTour';
import EditUser from './features/auth/admin/pages/EditUser';
import Profile from './features/auth/pages/Profile/Profile';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import EditProfile from './features/auth/pages/Profile/EditProfile';
import TourDetails from './pages/TourDetails';
import CheckoutButton from './components/checkout/CheckoutButton';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from "./pages/Resetpassword";
import Success from "./components/success/Success";
import Booking from "./components/booking/booking";
import UserBooking from "./components/userbooking/userbooking";
import Details from "./components/detail/Details";

axios.defaults.withCredentials = true;


const stripePromise = loadStripe('pk_test_51NRms3IZgty6f2DLU3WKgmfiJ3i01CGh1C3U4ddYRjOsrhldr4ioNO5h9Tp2Akf943gWynS1tAXOfz0RGynzvFo900lOoO32uI');
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        <ToastContainer
          position="bottom-right"
          autoClose={7500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/tour-details/:id" element={<TourDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/profile" element={<Sidebar><Profile/></Sidebar>} />
          <Route path="/edit-profile" element={<Sidebar><EditProfile/></Sidebar>} />
          <Route path="/dashboard" element={<Sidebar><Dashboard/></Sidebar>} />
          <Route path="/add-tour" element={<Sidebar><AddTour/></Sidebar>} />
          <Route path="/edit-tour/:id" element={<Sidebar><EditTour/></Sidebar>} />
          <Route path="/edit-user/:id" element={<Sidebar><EditUser/></Sidebar>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/userbooking" element = {<Sidebar><UserBooking/></Sidebar>} />
          <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
          <Route path="/payment-successful" element={<Success/>}/>
          <Route path="/booking" element={<Sidebar><Booking/></Sidebar>} />
          <Route path="/details/:tourId" element={<Sidebar><Details/></Sidebar>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
