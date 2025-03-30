import React, { useState } from "react";
import { account, db } from "../../src/appWrite.js";
import { storage } from "../../src/appWrite.js";
import add from "../assets/addAvatar.png";
import { ID } from "appwrite";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");
  // const [file, setfile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !pic) {
        alert("Please Fill All Inputs");
        return;
      }
      // creating a user
      const user = await account.create(ID.unique(), email, password, name);
      // creating a storage bucket for user's profile picture
      const profile = await storage.createFile(
        "67e95bd700161896f461",
        ID.unique(),
        pic
      );

      const dataBase = await db.createDocument("67e9675d000d1762afe5", "$id", {
        name,
        email,
      });
      console.log(user);
      console.log(user.$id);
      console.log(profile);
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
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setPic(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={add} alt="" /> <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>

        <p>Already have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
