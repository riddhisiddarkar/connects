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
			<p className={styles.donation_text}>Donations</p>
			<div className={styles.donationpage_details}>
				<img className={styles.donationpage_ngoimg} src="" />
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
