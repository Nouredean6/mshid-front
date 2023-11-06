import { getUser } from "../../redux/features/auth/authService";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';


const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function getUserData() {
      try {
        const data = await getUser();
        if (isMounted) {
          setEmail(data.email);
          dispatch(SET_USER(data));
        }
      } catch (error) {
        // Handle any errors if needed
      }
    }

    getUserData();

    return () => {
      isMounted = false; // Cleanup function to mark the component as unmounted
    };
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    const successRequest = axios.post('http://localhost:5000/payment-success', { email });

    successRequest
      .then((res) => {
        if (isMounted && res.data.Status === 'Success') {
          const timer = setTimeout(() => {
            navigate('/');
          }, 5000);

          return () => {
            clearTimeout(timer); // Cleanup function to clear the timer
          };
        } else {
          console.log("Password reset request failed:", res.data.Status);
        }
      })
      .catch((err) => {
        console.log("Network error:", err);
      });

    return () => {
      isMounted = false; // Cleanup function to mark the component as unmounted
    };
  }, [email, navigate]);

  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="body1" paragraph>
          Your tour purchase was successful. Please check your email for details on the rendezvous and location with your tour guide.
        </Typography>
        <Typography variant="body2">
          - Team Murshid
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{ marginTop: '1rem' }}
        >
          You will be redirected to the home page...
        </Button>
      </div>
    </Container>
  )
}

export default Success;
