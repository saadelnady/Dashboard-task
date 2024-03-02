import React from "react";
import "./styles/Aside.css";
import NavBar from "./NavBar.jsx";
import User from "./User.jsx";

const Aside = ({ isActive, handleActivation }) => {
  return (
    <aside className={`Aside ${isActive ? "active" : ""}`}>
      <NavBar handleActivation={handleActivation} />
      <User />
    </aside>
  );
};

export default Aside;
