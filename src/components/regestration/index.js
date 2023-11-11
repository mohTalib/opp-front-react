import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z]{2}(1[6-9]|2[0-3])\d{3}(@auis\.edu\.krd|@alumni\.auis\.edu\.krd)$/;

    if (!regex.test(email)) {
      setError('Invalid email. Please use your AUIS email.');
      return false;
    }
    return true;
  };

  const debouncedEmailValidation = debounce(async (email) => {
    if (email.trim() && !validateEmail(email)) {
      setError('Invalid email. Please use your AUIS email.');
    } else {
      setError(''); // Clear the error if the email is valid
    }
  }, 300);

  useEffect(() => {
    debouncedEmailValidation(email);
    return () => debouncedEmailValidation.cancel();
  }, [email, debouncedEmailValidation]);

  const handleRegistration = async () => {
    setIsLoading(true);

    try {
      // Check for email validation error before attempting registration
      if (error) {
        console.log('Email validation error:', error);
        return;
      }

      await axios.post('https://dj-front.onrender.com/register/', {
        full_name: fullName,
        email: email.toLowerCase(),
      });

      console.log('Registration successful');
      localStorage.setItem('userStatus', 'authenticated');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || isLoading) {
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
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Write Down Your Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
