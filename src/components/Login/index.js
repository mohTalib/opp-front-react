import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(''); // Reset error message when email changes
  }, [email]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSubmit = debounce(async () => {
    setLoading(true);

    // Check if the email is empty
    if (!email.trim()) {
      setError('Please enter your email.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://dj-front.onrender.com/login/', { email });
      console.log('Login successful');
      localStorage.setItem('userStatus', 'authenticated');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      setError('Please enter a valid email');
    } finally {
      setLoading(false);
    }
  }, 500); // Adjust the debounce delay as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedSubmit();
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
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p style={{ color: 'yellow' }}>{error}</p>}
          </div>

          <button className="sign" type="submit" disabled={loading}>
            {loading ? 'Joining...' : 'Join'}
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
