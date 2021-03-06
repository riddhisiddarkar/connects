import React from "react";

import styles from "./ModalStyle.module.css";

const ModalStyle = ({ children }) => {
  return (
    <div className={styles.modalStyle}>
      <div className={styles.modalStyleContainer}>{children}</div>
    </div>
  );
};

export default ModalStyle;
