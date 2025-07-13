import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { cnic, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
    } catch (err) {
      alert(err.response?.data?.message || 'Login error');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="login-form-group">
              <input
                type="text"
                className="login-form-style"
                placeholder="Your CNIC"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="login-form-group">
              <input
                type="password"
                className="login-form-style"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="login-switch-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
