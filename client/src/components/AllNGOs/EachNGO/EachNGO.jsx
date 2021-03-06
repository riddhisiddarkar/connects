import React from "react";

import styles from "./EachNGO.module.css";
import image from "../../../assets/images/childImage.png";
import website_logo from "../../../assets/icons/website.svg";

const EachNGO = () => {
	return (
		<div className={styles.eachngo}>
			<img src={image} alt="ngo" className={styles.eachngo_image} />
			<p className={styles.eachngo_name}>Batata matata foundation</p>
			<p className={styles.eachngo_location}>India ,Goa, ponda,</p>
			<div className={styles.info}>
				<p className={styles.eachngo_type}>Type: Oldagehome</p>
				<p className={styles.eachngo_email}>Email: gandhidheeraj0@gmail.com</p>
				<p className={styles.eachngo_phoneno}>Ph no: 0832474833</p>
			</div>

			<div className={styles.eachngo_websitediv}>
				<img
					src={website_logo}
					alt="website"
					className={styles.eachngo_websitediv_image}
				/>
				<p className={styles.eachngo_websitediv_website}>
					www.tejasimangale.mamuti.com
				</p>
			</div>
		</div>
	);
};

export default EachNGO;
