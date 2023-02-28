import React, {useState} from "react";
import {BASE_URL} from "../config/config"
import { Outlet, useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('User not found');
      }
    })
    .then(data => {
        localStorage.setItem('token', data.token);
        // Redirect the user to the home page
        navigate('/')
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>

      <Outlet />
    </form>
  );
}


export default LoginForm;