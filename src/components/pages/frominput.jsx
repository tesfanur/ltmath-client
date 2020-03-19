import React from "react";
import "./form-input.styles.scss";

const FromInput = ({ handleChange, label, ...otherPros }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherPros} />
      {label ? (
        <label
          className={`${otherPros.value.length ? "shrink" : ""} 
                form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FromInput;
