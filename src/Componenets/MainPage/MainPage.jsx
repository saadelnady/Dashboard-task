import React from "react";
import Header from "./Header.jsx";
import AlertsPage from "./AlertsPage.jsx";
import "./styles/MainPage.css";
const MainPage = () => {
  return (
    <div className="lay-out">
      <Header />
      <AlertsPage />
    </div>
  );
};
export default MainPage;
