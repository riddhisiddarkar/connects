import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Navbar.module.css";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, removeUser } from "../../features/userSlice";

const Navbar = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();
	const logoutuser = () => {
		dispatch(removeUser());
		localStorage.removeItem("connect2dot0");
		history.push("/login");
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.logo}>
						<Link to="/" href="#">
							Connect It
						</Link>
					</div>
					<input type="checkbox" className={styles.nav_check} />
					<label htmlFor="nav-check" className={styles.nav_toggler}>
						<span></span>
					</label>
					<nav className={styles.nav}>
						<div className={styles.g1}>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/donate">Donate</Link>
								</li>
								<li>
									<Link to="/locate">Locate</Link>
								</li>
								<li>
									<Link to="/ngos">NGO's</Link>
								</li>
							</ul>
						</div>
						<div className={styles.g2}>
							{user && <Link to="/dashboard">Dashboard</Link>}
							{user ? (
								<Button title="Logout" onclick={logoutuser} />
							) : (
								<Button title="Login" onclick={() => history.push("/login")} />
							)}
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
