import React from 'react';

import { useState } from 'react';
import { useAuth } from '../utils/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Optionally, redirect or show success message
    } catch (error: any) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;