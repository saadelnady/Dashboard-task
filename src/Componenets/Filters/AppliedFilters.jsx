import React from "react";
import xMarkIcon from "./assets/images/ic-xmark.png";
const AppliedFilters = () => {
  return (
    <div className="AppliedFilters">
      <h3>Filters</h3>
      <div>
        <div className="FiltersApplied">
          <p className="Applied">Filters Applied</p>
          <p>Clear All</p>
        </div>
        <div className="AllAppliedFilters">
          <div>
            Real Estate <img src={xMarkIcon} alt="xMarkIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedFilters;
