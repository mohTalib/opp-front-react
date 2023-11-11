import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define setIsLoggedIn here
  const [error, setError] = useState(''); // State to hold the error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is empty
    if (!email.trim()) {
      setError('Please enter your email.'); // Display an error if the email is empty
      return; // Prevent login if the email is empty
    }

    try {
      await axios.post('https://dj-front.onrender.com/login/', { email });
      console.log('Login successful');
      localStorage.setItem('userStatus', 'authenticated');
      setIsLoggedIn(true); // Set the user as logged in
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      setError('Please enter a valid email');
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
              onChange={(e) => setEmail(e.target.value)}
            />
             {error && <p style={{ color: 'yellow' }}>{error}</p>} {/* Display error message if present */}
          </div>
         
          <button className="sign" type="submit">Join</button>
        </form>
      )}
      <div className="social-message">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="signup">
        Don't have an account? <button className="sign" onClick={() => window.location.href = '/register'}>Register Now</button>
      </div>
    </div>
  );
};

export default LoginForm;
