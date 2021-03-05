import React from "react";

import styles from "./Input.module.css";

const RegisterInput = ({ title, type, name, onChange }) => {
  // console.log(onChange);
  return (
    <div className={styles.input}>
      <label className={styles.registerInput_label}>{title}</label>
      <input
        type={type}
        className={styles.registerInput_input}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default RegisterInput;
