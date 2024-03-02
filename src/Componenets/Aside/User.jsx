import React from "react";
import userImage from "./assets/images/ic-user.png";
import "./styles/User.css";
const User = () => {
  return (
    <div className="user-wrapper">
      <div className="user">
        <img src={userImage} alt="userImage" />
        <div className="content">
          <h3>Moni Roy</h3>
          <p>Beginner</p>
        </div>
      </div>
      <p>Street Suite . 20 </p>
    </div>
  );
};

export default User;
