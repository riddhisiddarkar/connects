import React from "react";

import styles from "./Button.module.css";

const Button = ({ onclick, title }) => {
  console.log(onclick);
  return (
    <button className={styles.btn} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
