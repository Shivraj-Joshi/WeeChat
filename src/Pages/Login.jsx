import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Wee Chat</div>
        <p>Login</p>
        <form>
          <input type="text" placeholder="email"></input>
          <input type="password" placeholder="enter password"></input>
        </form>
        <button>Sign in</button>
        <p>
          Don't have an account ? <NavLink to="/register">Register</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
