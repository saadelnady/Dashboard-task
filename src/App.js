import "./App.css";
import Aside from "./Componenets/Aside/Index";
import MainPage from "./Componenets/MainPage/MainPage.jsx";
import Filters from "./Componenets/Filters/Index.jsx";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(true);
  const handleActivation = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="App">
      <Aside isActive={isActive} handleActivation={handleActivation} />
      <MainPage isActive={isActive} handleActivation={handleActivation} />
      <Filters />
    </div>
  );
}

export default App;
