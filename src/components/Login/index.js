import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import './Styles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = debounce((value) => {
    setEmail(value);
  }, 300);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    try {
      setIsLoading(true);
      await axios.post('https://dj-front.onrender.com/login/', { email });
      console.log('Login successful');
      localStorage.setItem('userStatus', 'authenticated');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      setError('Please enter a valid email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <p className="title">Join</p>
      {isLoggedIn ? (
        <p className="message">You are already logged in.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Write Down Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <button className="sign" type="submit" disabled={isLoading}>
            {isLoading ? 'Joining...' : 'Join'}
          </button>
        </form>
      )}
      <div className="social-message">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="signup">
        Don't have an account?{' '}
        <button className="sign" onClick={() => navigate('/register')}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
