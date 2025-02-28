import React from "react";
import Avatar from "../assets/add.png";
import Cam from "../assets/cam.png";
import more from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Shivraj</span>
        <div className="chatIcon">
          <img src={Cam} alt="" />
          <img src={Avatar} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
