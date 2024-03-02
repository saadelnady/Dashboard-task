import React from "react";
import "./styles/Aside.css";
import NavBar from "./NavBar.jsx";
import User from "./User.jsx";

const Aside = () => {
  return (
    <aside className="Aside">
      <NavBar />
      <User />
    </aside>
  );
};

export default Aside;
