import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import './App.css';
import Sidebar from './containers/Sidebar';
import Header from './components/Header';
import MainContainer from './containers/MainView';
import Footer from './containers/Footer';
import OppsCates1 from './containers/Courses/Courses';
import OppsCates2 from './containers/internships/OppsCates';
import OppsCates3 from './containers/programs/programs';
import OppsCates4 from './containers/volo/volo';
import OppsCates5 from './containers/others/others';
import OppsCates7 from './containers/Training/programs';
import Coursesid from './containers/coursesid/coursesid';
import Internshipid from './containers/internshipid/interenshipid';
import Voloid from './containers/voloid/voloid';
import Programsid from './containers/programsid/programsid';
import Othersid from './containers/othersid/othersid';
import Trainingid from './containers/tariningid/programsid';
import LoginForm from './components/Login';
import RegistrationForm from './components/regestration';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for the presence of a token or authentication status in localStorage when the app loads
  useEffect(() => {
    const userStatus = localStorage.getItem('userStatus');
    if (userStatus === 'authenticated') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="app__container">
      <Sidebar />
        <div className="view__container">
          <Header />
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? <MainContainer/> : <Navigate to="/" replace />
              }
            />
          <Route path="/CultureExchanges/" element={<OppsCates1 />} />
          <Route path="/CultureExchanges/:id" element={<Coursesid />} />
          <Route path="/Internships/" element={<OppsCates2 />} />
          <Route path="/Internships/:id" element={<Internshipid />} />
          <Route path="/VirtualPrograms/" element={<OppsCates3 />} />
          <Route path="/VirtualPrograms/:id" element={<Programsid />} />
          <Route path="/Governmental/" element={<OppsCates4 />} />
          <Route path="/Governmental/:id" element={<Voloid />} />
          <Route path="/Training/" element={<OppsCates7 />} />
          <Route path="/Training/:id" element={<Trainingid />} />
          <Route path="/Others/" element={<OppsCates5 />} />
          <Route path="/Others/:id" element={<Othersid />} />
        </Routes>
      </div>
    </div><Footer />
    </Router>
  );
}

export default App; 

/*
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');


  useEffect(() => {
    client.get("/user/")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/register/",
      {
        email: email,
        username: username,
        
      }
    ).then(function(res) {
      client.post(
        "/login/",
        {
          email: email,
          
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/login/",
      {
        email: email,
        
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  if (currentUser) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <form onSubmit={e => submitLogout(e)}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h2>You're logged in!</h2>
          </div>
        </div>
    );
  }
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Authentication App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button id="form_btn" onClick={update_form_btn} variant="light">Register</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {
      registrationToggle ? (
        <div className="center">
          <Form onSubmit={e => submitRegistration(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>        
      ) : (
        <div className="center">
          <Form onSubmit={e => submitLogin(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )
    }
    </div>
  );
}

export default App; */