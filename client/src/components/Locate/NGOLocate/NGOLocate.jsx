import React from "react";
import Button from "../../../UI/Button/Button";

import styles from "./NGOLocate.module.css";

const NGOLocate = ({ data }) => {
  return (
    <div className={styles.ngolocate_container}>
      <div className={styles.ngolocate_details}>
        <p>{data.name}</p>
        <p>
          Phone No: <span>{data.phoneNo}</span>
        </p>
      </div>
      <Button title="Donate" onclick={() => console.log("hi")} />
    </div>
  );
};

export default NGOLocate;
