import React, { useState } from "react";
import { tableData } from "./data.js";

const AlertsPage = () => {
  const [activeRow, setActiveRow] = useState();

  const handleActivation = (index) => {
    setActiveRow(index);
  };

  return (
    <div className="table-content">
      <table>
        <tbody>
          {tableData.map((row, index) => {
            const isActive = activeRow === index;
            return (
              <React.Fragment key={index}>
                <tr
                  onClick={() => handleActivation(index)}
                  className={isActive ? "active" : ""}
                >
                  <td>
                    <div>
                      <img src={row.titleImage} alt="dollar-icon" />
                      {row.title}
                    </div>
                  </td>
                  <td>
                    <div>
                      <img src={row.viewImage} alt="dollar-icon" />
                      {row.view}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`${
                        row.riskType === "Low Risk" ? "lowRisk" : "highRisk"
                      }`}
                    >
                      <img src={row.statisticsImage} alt="dollar-icon" />
                      {row.statistics}
                    </div>
                  </td>
                  <td>
                    <div>
                      <img src={row.riskImage} alt="dollar-icon" />
                      {row.riskType}
                    </div>
                  </td>
                </tr>
                {isActive && (
                  <tr className="details">
                    <td colSpan="4">
                      <div>
                        <h4 className="text-start">
                          ${row.title} just announced an acquisition of $NFLX at{" "}
                          {row.view} B
                        </h4>
                        <p className="text-start">
                          This is an arbitrage , with the max gain being % x if
                          the deal closes, but the possible risk is % Y if the
                          deal fails, if the deal success is % and thereforethe
                          recommended play is long / short %ABC
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AlertsPage;
