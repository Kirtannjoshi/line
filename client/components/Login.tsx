import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;