import React from "react";

import styles from "./Input.module.css";

const RegisterInput = ({ title, type }) => {
  return (
    <div className={styles.input}>
      <label className={styles.registerInput_label}>{title}</label>
      <input type={type} className={styles.registerInput_input} />
    </div>
  );
};

export default RegisterInput;
