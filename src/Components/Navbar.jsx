import React from "react";
import profile from "../assets/profile.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Wee Chat</div>
      <div className="user">
        <img src={profile} alt="" />
        <span>Shivraj</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
