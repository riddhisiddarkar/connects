import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Dashboard.module.css";
import Button from "../../UI/Button/Button";
import EachDonation from "./EachDonation/EachDonation";
import { selectUser } from "../../features/userSlice";

const Dashboard = () => {
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

  return (
    <div className={styles.donationpage}>
      <div className={styles.donationpage_details}>
        <img
          className={styles.donationpage_ngoimg}
          src="https://upvey.com/wp-content/uploads/2020/04/NGO-Hindi.jpg"
        />
        <p className={styles.donationpage_ngoname}>{user?.name}</p>

        <div className={styles.other}>
          <p className={styles.donationpage_location}>{user?.location}</p>
          <p className={styles.donationpage_contact}>
            Contact: {user?.phoneNo}
          </p>
          <p className={styles.donationpage_email}>Email: {user?.email}</p>
          <p className={styles.donationpage_type}>
            Type:
            {user?.category[0].old && "Old age home, "}
            {user?.category[0].children && "Orphange, "}
            {user?.category[0].others && "Others, "}
          </p>
        </div>
        <Button title="View Website" onclick={() => console.log("Website")} />
      </div>
      <div className={styles.donations}>
        <p className={styles.donation_text}>Donations</p>
        <div className={styles.bckgnd}></div>
        {user?.pending.length == 0 && <p>No donations yet</p>}
        {user?.pending.map((ele, i) => (
          <EachDonation data={ele} />
        ))}

        {/* <div className={styles.totalamt}>
          <p>Total Amount</p>
          <div className={styles.value}>4593</div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
