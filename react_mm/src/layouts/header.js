import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../styles.css';

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar variant="dark">
      <Navbar.Brand href="#home">MixMind</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <div className="headbutton">
      <button onClick={() => {loggedIn ? navigate('/logout') : navigate('/login')}}>{loggedIn ? '로그아웃' : '로그인'}</button>

        <Button className="login-button" variant="outline-info" onClick={handleLogin}>
          Login
        </Button>
        <Button
            className="signup-button"
            variant="outline-info"
            onClick={() => {
            navigate(`/regist`, {
                replace: false,
            });
            }}
        >
            Sign up
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;