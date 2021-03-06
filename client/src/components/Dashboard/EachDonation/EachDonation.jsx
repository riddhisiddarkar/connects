import React from "react";

import styles from "./EachDonation.module.css";

const EachDonation = ({ data }) => {
	console.log(data);
	return (
		<div className={styles.donation}>
			<div className={styles.donationdetails}>
				<p className={styles.donationdetails_name}>{data.name}</p>
				<p className={styles.donationdetails_no}>{data.phoneNo}</p>
			</div>
			<div>
				{data.type == "money" && (
					<p className={styles.donationdetails_amount}>{data.amount}</p>
				)}
				{data.type == "food" && (
					<>
						<p className={styles.donationdetails_amount}>{data.food}</p>
					</>
				)}
				{data.type == "item" && (
					<p className={styles.donationdetails_amount}>{data.item}</p>
				)}
				{data.quantity && (
					<p className={styles.donationdetails_amount}>{data.quantity}</p>
				)}
			</div>
		</div>
	);
};

export default EachDonation;
