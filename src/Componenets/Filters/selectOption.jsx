import React from "react";

const SelectOption = ({ title, options }) => {
  return (
    <div className="SelectOption">
      <h5>{title}</h5>
      <ul>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <input type="radio" name={title} id={option} />
              <label htmlFor={option}>{option}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectOption;
