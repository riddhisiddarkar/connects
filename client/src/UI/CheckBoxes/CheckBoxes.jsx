import React from "react";

import styles from "./CheckBoxes.module.css";

const CheckBox = ({ options, onchange }) => {
  return (
    <>
      {options?.map((ele, i) => (
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            key={i}
            name="name"
            name={ele.name}
            onChange={onchange}
          />
          <label className={styles.checkbox_label}>{ele.title}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
