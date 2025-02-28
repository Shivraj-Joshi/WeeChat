import React from "react";
import user from "../assets/profile.jpg";
const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>shivraj</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
