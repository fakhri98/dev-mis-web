import React from "react";
import {Button, Input} from "../components";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import authLogin from "../utils/authLogin";

const Login = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <div className="w-[1000px] sm:w-[600px] border border-slate-500 px-4 py-4 space-y-6 rounded-lg">
        <form method="post">
          <Input 
            title="Username" 
            type="text" 
            id="username"
            placeholder="Input your username"
          />
          <Input
            title="Password"
            type="password"
            id="password"
            placeholder="Input your password"
          />
          <Button widthVariant="small" textVariant="white" colorVariant="info" onClick={authLogin}>
            Login
          </Button>
          <Button widthVariant="small" textVariant="white">
            Cancel
          </Button>
          {/* <button type="button">Login </button> */}
        </form>
        
      </div>
    </div>
  );
};

export default Login;