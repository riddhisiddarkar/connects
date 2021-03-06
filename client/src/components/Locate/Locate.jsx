import React, { useEffect, useState } from "react";

import styles from "./Locate.module.css";
import location from "../../assets/icons/location.svg";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import NGOLocate from "./NGOLocate/NGOLocate";
import axios from "axios";

const Locate = () => {
	const [ngos, setNgos] = useState([]);
	const [selectedngos, setSelectedngos] = useState([]);
	const [searchFilter, setSearchFilter] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:5000/ngo/all")
			.then((res) => {
				setNgos(res.data);
				setSelectedngos(res.data);
			})
			.catch((error) => {
				console.log("There is an error in getting the ngo");
				console.log(error);
			});
	}, []);

	const searchfeature = () => {
		let k = ngos.filter(function (e) {
			return e.location.toLowerCase().includes(searchFilter.toLowerCase());
		});
		setSelectedngos(k);
	};

	return (
		<div className={styles.locationPage}>
			<h1>
				<span>Locate</span> NGO’s near you and report <span>place</span> which
				needs our attention
			</h1>
			<img src={location} alt="locate" />
			<div className={styles.locateSection}>
				<Input
					title="Enter Location"
					placeholder="City Name"
					name="name"
					onChange={(e) => setSearchFilter(e.target.value)}
				/>
				<div>
					<Button title="Locate" onclick={() => searchfeature()} />
					<Button title="Report" onclick={() => console.log("ki")} />
				</div>
			</div>
			{selectedngos.map((ngo, i) => (
				<NGOLocate key={i} data={ngo} />
			))}
		</div>
	);
};

export default Locate;
