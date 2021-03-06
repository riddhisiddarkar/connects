import React from "react";

import styles from "./EachDonation.module.css";

const EachDonation = () => {
  return (
    <div className={styles.donation}>
      <div className={styles.donationdetails}>
        <p className={styles.donationdetails_name}>Gandhi</p>
        <p className={styles.donationdetails_no}>09876543</p>
      </div>
      <p className={styles.donationdetails_amt}>7655</p>
    </div>
  );
};

export default EachDonation;
