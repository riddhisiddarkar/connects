import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Home.module.css";
import coverimage from "../../assets/icons/coverimg.svg";
const Home = () => {
  return (
    <main>
      <div className={styles.hero_section}>
        <div className={styles.info}>
          <h1 className={styles.h1}>
            Give a <span style={{ color: "#ff9900" }}>helping</span>
            <br />
            hand those who <br />
            <span style={{ color: "#ff9900" }}>need</span> it
          </h1>
          <span className={styles.tag}>
            A small donation can change <br />
            thousands of lives.
          </span>
          <Button title="Donate" />
        </div>
        <img src={coverimage} alt="cover pic" />
      </div>
    </main>
  );
};

export default Home;
