import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css'; // Use the same styles as login but renamed

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registered successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="register-page section">
      <div className="register-container">
        <div className="register-card card-3d-wrap">
          <div className="card-3d-wrapper">
            <div className="card-front">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3">Register</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="register-form-group">
                      <input
                        type="text"
                        name="fullName"
                        className="register-form-style"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                      <i className="input-icon uil uil-user"></i>
                    </div>
                    <div className="register-form-group">
                      <input
                        type="text"
                        name="cnic"
                        className="register-form-style"
                        placeholder="CNIC"
                        value={formData.cnic}
                        onChange={handleChange}
                        required
                      />
                      <i className="input-icon uil uil-user"></i>
                    </div>
                    <div className="register-form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="register-form-style"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <i className="input-icon uil uil-phone"></i>
                    </div>
                    <div className="register-form-group">
                      <input
                        type="password"
                        name="password"
                        className="register-form-style"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn mt-4">Register</button>
                    <p className="mb-0 mt-4 text-center">
                      <Link to="/login" className="link">Already have an account?</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
