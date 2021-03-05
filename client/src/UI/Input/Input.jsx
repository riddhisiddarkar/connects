import React from "react";

import styles from "./Input.module.css";

const RegisterInput = ({ title, type, name, onChange, placeholder }) => {
  // console.log(onChange);
  return (
    <div className={styles.input}>
      <label className={styles.registerInput_label}>{title}</label>
      <input
        type={type}
        className={styles.registerInput_input}
        name={name}
        onChange={onChange}
        placeholder={`${placeholder ? placeholder : ""}`}
      />
    </div>
  );
};

export default RegisterInput;
