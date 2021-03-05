import React from "react";

import styles from "./CheckBoxes.module.css";

const CheckBox = ({ options }) => {
  return (
    <>
      {options?.map((ele, i) => (
        <div className={styles.checkbox}>
          <input type="checkbox" key={i} name="name" value="value" />
          <label className={styles.checkbox_label}>{ele.title}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
