import React from "react";
import "./create.scss";
const Input = ({ label, name, design }) => {
  return (
    <div className={`user-box ${design}`}>
      <input list="position" required name={name} id={label} type="text" />
      <label htmlFor={label}>{label}</label>
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
