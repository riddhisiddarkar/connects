import React from "react";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <div class="hero-section">
        <div class="info">
          <h1>
            Give a <span style="color: #ff9900">helping</span>
            <br />
            hand those who <br />
            <span style="color: #ff9900">need</span> it
          </h1>
          <span class="tag">
            A small donation can change <br />
            thousands of lives.
          </span>
          <button>Donate</button>
        </div>
        <img src="./Images/coverimg.svg" alt="" />
      </div>
    </main>
  );
};

export default Home;
