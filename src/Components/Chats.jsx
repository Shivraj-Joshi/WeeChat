import React from "react";
import user from "../assets/profile.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>shivraj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>shivraj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>shivraj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>shivraj</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
