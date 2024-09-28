import React from "react";
import "./create.scss";
const Select = ({ label, name, options, design }) => {
  return (
    <div className={`select-box ${design}`}>
      <label htmlFor={label}>{label}</label>
      <select required name={name} id={label}>
        <option value="">Seçiniz</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
