import React from "react";
import add from "../assets/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Wee Chat</div>
        <p>Register</p>
        <form>
          <input type="text" placeholder="enter your name"></input>
          <input type="text" placeholder="email"></input>
          <input type="password" placeholder="enter password"></input>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" /> <span>Add an Avatar</span>
          </label>
        </form>
        <button>Sign up</button>
        <p>Already have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
