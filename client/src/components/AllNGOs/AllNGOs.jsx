import React from "react";

import styles from "./AllNGOs.module.css";
import EachNGO from "./EachNGO/EachNGO";

const AllNGOs = () => {
  return (
    <div className={styles.allngospage}>
      <h2 className={styles.allngospage_heading}>NGO' S registered with us</h2>
      <div className={styles.allngospage_container}>
        <EachNGO />
      </div>
    </div>
  );
};

export default AllNGOs;
