import React from "react";

import styles from "./Dashboard.module.css";
import Button from "../../UI/Button/Button";
import EachDonation from "./EachDonation/EachDonation";

const Dashboard = () => {
  return (
    <div className={styles.donationpage}>
      <p className={styles.donation_text}>Donations</p>
      <div className={styles.donationpage_details}>
        <img className={styles.donationpage.ngoimg} src="" />
        <p className={styles.donationpage_ngoname}>BATATA MATATA FOUNDATION</p>
        <p className={styles.donationpage_location}>
          Location: India, Goa , Ponda
        </p>
        <p className={styles.donationpage_contact}>Contact: 9325995634</p>
        <p className={styles.donationpage_email}>
          Email: gandhidheeraj9@gmail.com
        </p>
        <p className={styles.donationpage_type}>Type: Orphanage</p>
        <Button title="View Website" />
      </div>
      <div className={styles.donations}>
        <EachDonation />
      </div>
    </div>
  );
};

export default Dashboard;
