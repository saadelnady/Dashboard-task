import React from "react";
import Header from "./Header.jsx";
import AlertsPage from "./AlertsPage.jsx";
import "./styles/MainPage.css";
const MainPage = ({ isActive, handleActivation }) => {
  return (
    <div className="lay-out">
      <Header isActive={isActive} handleActivation={handleActivation} />
      <AlertsPage />
    </div>
  );
};
export default MainPage;
