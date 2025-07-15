import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" required />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;