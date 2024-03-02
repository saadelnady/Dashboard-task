import React from "react";
import { navLinkesData } from "./data";
import logo from "./assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={logo} alt="logo-img" className="logo-img" />
      <ul className="links">
        {navLinkesData.map((item, index) => {
          return (
            <li key={index} className="link-Item">
              <img src={item.img} alt="React Logo" className="svg-icon" />
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
