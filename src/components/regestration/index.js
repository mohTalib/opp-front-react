import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // State to hold the error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the full name and email are empty
    if (!fullName.trim() || !email.trim()) {
      setError('Please fill in all fields.'); // Display an error if any field is empty
      return; // Prevent registration if any field is empty
    }

  
  const lowerCaseEmail = email.toLowerCase();

  
  const validEmailDomains = ['@auis.edu.krd', '@alumni.auis.edu.krd'];
  const emailDomain = lowerCaseEmail.substring(lowerCaseEmail.lastIndexOf('@'));
  if (!validEmailDomains.includes(emailDomain)) {
    setError('Invalid email domain. Please use a valid email domain.');
    return; 
  }

    try {
      await axios.post('https://dj-front.onrender.com/register/', { full_name: fullName, email: lowerCaseEmail });
      console.log('Registration successful');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Registration failed', error);
    }
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
            onChange={(e) => setFullName(e.target.value)} />
          <label htmlFor="email">Write Down Your Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {error && <p style={{ color: 'yellow' }}>{error}</p>} {/* Display error message if present */}
        </div>
        <button className="sign" type="submit">Register</button>
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
