import React from "react";
import searchIcon from "./assets/images/ic-search.png";
import { industryList, marketCap, riskLevel, Asset, strategy } from "./data.js";
import Option from "./Option.jsx";
import SelectOption from "./selectOption.jsx";
const Stock = () => {
  return (
    <div className="stock">
      <h5>Stock</h5>
      <div className="search">
        <input type="text" placeholder="$ TICKER" />
        <img src={searchIcon} alt="searchimg" className="searchimg" />
      </div>
      <div className="links">
        <h5>Industry</h5>
        <div>
          <ul>
            {industryList.slice(0, 6).map((link, index) => {
              return (
                <li key={index}>
                  <img src={link.img} alt="linkImg" />
                  {link.title}
                </li>
              );
            })}
          </ul>
          <ul>
            {industryList.slice(6).map((link, index) => {
              return (
                <li key={index}>
                  <img src={link.img} alt="linkImg" />
                  {link.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="options">
        <Option title="Market Cap" options={marketCap} />
        <Option title="Risk Level" options={riskLevel} />
      </div>
      <div className="options">
        <SelectOption title="Asset" options={Asset} />
        <SelectOption title="strategy" options={strategy} />
      </div>
    </div>
  );
};

export default Stock;
