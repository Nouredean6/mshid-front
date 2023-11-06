import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function ResetPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://murshid-pfe.onrender.com/reset-password/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login');
        } else {
          console.log('Password reset request failed:', res.data.Status);
        }
      })
      .catch((err) => {
        console.log('Network error:', err);
      });
  };

  return (
    <Container>
      <Form>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>New Password</strong>
            </label>
            <PasswordInput
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <SubmitButton type="submit">Update</SubmitButton>
        </form>
      </Form>
    </Container>
  );
}

export default ResetPassword;
