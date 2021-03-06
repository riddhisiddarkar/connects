import React from "react";

import styles from "./Dashboard.module.css";
import Button from "../../UI/Button/Button";
import EachDonation from "./EachDonation/EachDonation";

const Dashboard = () => {
	return (
		<div className={styles.donationpage}>
			<div className={styles.donationpage_details}>
				<img
					className={styles.donationpage_ngoimg}
					src="https://upvey.com/wp-content/uploads/2020/04/NGO-Hindi.jpg"
				/>
				<p className={styles.donationpage_ngoname}>BATATA MATATA FOUNDATION</p>

				<div className={styles.other}>
					<p className={styles.donationpage_location}>
						Location: India, Goa , Ponda
					</p>
					<p className={styles.donationpage_contact}>Contact: 9325995634</p>
					<p className={styles.donationpage_email}>
						Email: gandhidheeraj9@gmail.com
					</p>
					<p className={styles.donationpage_type}>Type: Orphanage</p>
				</div>
				<Button title="View Website" />
			</div>
			<div className={styles.donations}>
				<p className={styles.donation_text}>Donations</p>
				<div className={styles.bckgnd}></div>
				<EachDonation />
				<EachDonation />

				<div className={styles.totalamt}>
					<p>Total Amount</p>
					<div className={styles.value}>4593</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
