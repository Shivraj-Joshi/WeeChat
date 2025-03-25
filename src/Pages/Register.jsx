import React, { useState } from "react";
import { account } from "../../src/appWrite.js";
import add from "../assets/addAvatar.png";
import { ID } from "appwrite";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [file, setfile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("Please Fill All Inputs");
        return;
      }
      const user = await account.create(ID.unique(), email, password, name);
      console.log(user);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Wee Chat</div>
        <p>Register</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter your name"
          ></input>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="enter password"
          ></input>
          {/* <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" /> <span>Add an Avatar</span>
          </label> */}
          <button>Sign up</button>
        </form>

        <p>Already have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
