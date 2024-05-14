import React, { useState } from 'react';
import axios from '../api/axiosConfig';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      console.log('Login successful:', response.data);
      // Handle login success (e.g., redirect, store token)
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;