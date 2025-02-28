import React from "react";
import attach from "../assets/attach.png";
import add from "../assets/addAvatar.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="typing....." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={add} alt="" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
