import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash'; // Import lodash debounce
import './Styles.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleInputChange = debounce((value, setter) => {
    setter(value);
  }, 300);

  const validateEmail = async (email) => {
    const regex = /^[a-zA-Z]{2}(1[6-9]|2[0-3])\d{3}(@auis\.edu\.krd|@alumni\.auis\.edu\.krd)$/;

    if (!regex.test(email)) {
      setError('Invalid email. Please use your AUIS email.');
      return false;
    }

    try {
      // Add an asynchronous validation step here if needed
      // For example, check if the email is already registered
      // await axios.get('https://example.com/check-email', { params: { email } });
    } catch (error) {
      setError('Email validation failed.');
      return false;
    }

    return true;
  };

  const handleRegistration = async () => {
    setIsLoading(true);

    const lowerCaseEmail = email.toLowerCase();

    if (!(await validateEmail(lowerCaseEmail))) {
      setIsLoading(false);
      return;
    }

    try {
      await axios.post('https://dj-front.onrender.com/register/', { full_name: fullName, email: lowerCaseEmail });
      console.log('Registration successful');
      localStorage.setItem('userStatus', 'authenticated');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    handleRegistration();
  };

  return (
    <div className="form-container">
      <p className="title">New Register</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">Write Down Your Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => handleInputChange(e.target.value, setFullName)}
          />
          <label htmlFor="email">Write Down Your Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e.target.value, setEmail)}
          />
          {error && <p style={{ color: 'yellow' }}>{error}</p>}
        </div>
        <button className="sign" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <div className="social-message">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <p className="signup">
        You have an account? <Link to="/">Join Us</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
