import React from "react";
import "./filter.scss";
const Select = ({ label, name, options, handleChange }) => {
  return (
    <div className="filter-select">
      <select onChange={handleChange} required name={name} id={label}>
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
