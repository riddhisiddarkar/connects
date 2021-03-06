import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <a href="#">Logo</a>
          </div>
          <input type="checkbox" className={styles.nav_check} />
          <label for="nav-check" className={styles.nav_toggler}>
            <span></span>
          </label>
          <nav className={styles.nav}>
            <div className={styles.g1}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Donate</a>
                </li>
                <li>
                  <a href="#">Locate</a>
                </li>
                <li>
                  <a href="#">NGO's</a>
                </li>
              </ul>
            </div>
            <div className={styles.g2}>
              <a href="#">Dashboard</a>
              <Button title="Login" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
