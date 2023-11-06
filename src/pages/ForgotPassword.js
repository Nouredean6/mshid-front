import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  min-height: 100vh;
`;

const Form = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 25%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h4`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ReturnButton = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  background: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
`;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/forgot-password', { email }) 
      .then((res) => {
        if (res.data.Status === 'Success') {

          navigate('/login');
        } else {
          console.log("Password reset request failed:", res.data.Status);
        }
      })
      .catch((err) => {
        console.log("Network error:", err);
      });
  };

  return (
    <Container>
      <Form>
        <Title>Forgot Password</Title>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <EmailInput
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <SubmitButton type="submit">Send</SubmitButton>
        </form>
        <ReturnButton to="/">Return to Home</ReturnButton>
      </Form>
    </Container>
  );
}

export default ForgotPassword;
