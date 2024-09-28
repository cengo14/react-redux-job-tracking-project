import React from "react";
import "./filter.scss";
const Input = ({ label, name, handleChange }) => {
  return (
    <div className="filter-input">
      <input
        onChange={handleChange}
        required
        name={name}
        id={label}
        type="text"
        placeholder="Ara"
      />
      {/* <datalist id="position">
        <option value="Frontend Developer"></option>
        <option value="Backend Developer"></option>
        <option value="Product Manager"></option>
        <option value="Marketing Manager"></option>
        <option value="Data Scientist"></option>
      </datalist> */}
    </div>
  );
};

export default Input;
