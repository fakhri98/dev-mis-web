import React, {useState} from "react";
import {BASE_URL} from "../config/config"
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch (`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const token = await response.json();
        Cookies.set('token', token, {expires: 1});
        // redirect to home page or authenticated route
        window.location.href = '/';
      } else {
        // handle non-OK response here
        console.error('Error:', response.status);
      }
    } catch (error) {
      // handle network or other errors here
      console.error('Network error:', error);
    }
  };

  const cancelButton= () => {
    navigate('/')
  };

  return (
    <div className="w-full flex justify-center min-h-screen items-center">  
      <div className="w-[1000px] sm:w-[600px] border border-slate-500 px-4 py-4 space-y-6 rounded-lg">  
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              title="Username :" 
              type="text" 
              id="username"
              value={username} 
              placeholder = "Input your username"
              onChange={(event) => setUsername(event.target.value)} 
            />
          </div>
          <div className="pt-5">
            <Input
              title="Password :" 
              type="password"
              id="password" 
              value={password} 
              placeholder= "Input your password"
              onChange={(event) => setPassword(event.target.value)} 
            />
          </div>
          {/* <button type="submit">Login</button> */}
          <div className="pt-5 space-x-5">
            <Button 
            widthVariant="small" 
            textVariant="white" 
            colorVariant="success" 
            typeVariant="submit"
            >
              Login
            </Button>

            <Button 
            widthVariant="small" 
            textVariant="white" 
            colorVariant="danger" 
            typeVariant="reset"
            onClick={cancelButton}
            >
              Cancel
            </Button>
          </div>

          <Outlet />
        </form>
      </div>
    </div>
  );
}


export default LoginForm;