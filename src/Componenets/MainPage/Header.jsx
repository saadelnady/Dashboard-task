import React from "react";
import searchIcon from "./assets/images/ic-search.png";
import notificationIcon from "./assets/images/ic-alerts.png";
import burgerIcon from "./assets/images/burgerIcon.png";

const Header = ({ handleActivation }) => {
  return (
    <div className="Header">
      <img
        src={burgerIcon}
        alt="burgerIcon"
        className="burgerIcon"
        onClick={handleActivation}
      />
      <h1>ALERTS</h1>
      <div className="search">
        <input type="text" placeholder="Search By ..." />
        <img src={searchIcon} alt="searchimg" className="searchimg" />
      </div>
      <div className="notification">
        <img
          src={notificationIcon}
          alt="notificationIcon"
          className="notificationIcon"
        />
      </div>
    </div>
  );
};

export default Header;
