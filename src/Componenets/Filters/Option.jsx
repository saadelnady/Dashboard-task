import React from "react";

const Option = ({ title, options }) => {
  return (
    <div className="option">
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

export default Option;
