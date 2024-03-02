import React from "react";
import "./styles/Filters.css";
import AppliedFilters from "./AppliedFilters.jsx";
import Stock from "./Stock.jsx";

const Filters = () => {
  return (
    <div className="Filters">
      <AppliedFilters />
      <Stock />
      <button className="submit">Apply</button>
    </div>
  );
};

export default Filters;
