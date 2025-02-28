import React from "react";
import profile from "../assets/profile.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <span>Wee Chat</span>
      <div className="user">
        <img src={profile} alt="" />
        <span>Shivraj</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
