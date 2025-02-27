import React from "react";

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
        <p>Don't have an account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
