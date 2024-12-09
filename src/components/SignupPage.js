import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Link to external CSS

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup successful:', form);
    navigate('/verification');
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            
            value={form.firstName}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            
            value={form.lastName}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            
            value={form.username}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            
            value={form.password}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
