import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Add this CSS file for styling

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsRobotChecked(e.target.checked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isRobotChecked) {
      alert('Please confirm you are not a robot!');
      return;
    }
    console.log('Login Attempt:', form);
    navigate('/verification');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 ckassname="h1" color="white">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={isRobotChecked}
                onChange={handleCheckboxChange}
              />
              I am not a robot
            </label>
          </div>
          <button
            type="submit"
            className={`login-btn ${isRobotChecked ? '' : 'disabled'}`}
            disabled={!isRobotChecked}
          >
            Login
          </button>
        </form>
        <p className="account-text">
          Don't have an account?{' '}
          <span className="signup-link" onClick={handleSignupRedirect}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
