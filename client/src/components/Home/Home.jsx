import React from "react";
import Button from "../../UI/Button/Button";

import styles from "./Home.module.css";
import coverimage from "../../assets/icons/coverimg.svg";
import LocateHomePage from "../../assets/icons/LocateHomePage.svg";
import edit from "../../assets/icons/edit.svg";
import ngos from "../../assets/icons/ngos.svg";
import spraypaint from "../../assets/icons/spraypaint.svg";
import Untitled2 from "../../assets/icons/Untitled2.svg";
import shadedbackground from "../../assets/images/shadedbackground.png";
import HoldingHeart from "../../assets/icons/HoldingHeart.svg";
import call from "../../assets/icons/call.svg";
import insta from "../../assets/icons/Insta.svg";
import mail from "../../assets/icons/Mail.svg";
import twitter from "../../assets/icons/Twitter.svg";

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
      <div className={styles.optns}>
        {[
          {
            image: LocateHomePage,
            title: "find the nearest NGO’s to your current location",
            button_title: "Locate",
          },
          {
            image: edit,
            title: "Register your NGO here to let people connect",
            button_title: "Register",
          },
          {
            image: ngos,
            title: "List of all NGO’s associated with our organisation",
            button_title: "NGO'S",
          },
        ].map((ele, i) => (
          <div
            className={[styles.optn1, styles.op]}
            key={i}
            style={{ background: { spraypaint } }}
          >
            <div className={styles.icons}>
              <img src={ele.image} alt={ele.button_title} />
            </div>
            <p>{ele.title}</p>
            <Button title={ele.button_title} />
          </div>
        ))}
      </div>
      <div
        className={styles.about}
        style={{ background: { shadedbackground } }}
      >
        <img
          src={HoldingHeart}
          alt="HoldingHeart"
          style={{ background: "transparent" }}
        />
        <div className={styles.abt_info}>
          <h2 style={{ background: "transparent" }}>What we do</h2>
          <p style={{ background: "transparent" }}>
            We provide a common platform to many NGO’s where people can help
            them through us. NGO’s can register themselves to us and can get
            donations or any support from the people. We have helped millions of
            people and will continue serving the needy.
          </p>
          <Button title="Learn More" onclick={() => console.log("clicked")} />
        </div>
      </div>
      <div className={styles.reach}>
        {[
          {
            title: "Donation",
            no: 120,
          },
          {
            title: "NGO's",
            no: 50,
          },
          {
            title: "People Benefited",
            no: "2B+",
          },
        ].map((ele, i) => (
          <div
            className={styles.r}
            style={{ background: { Untitled2 } }}
            key={{ i }}
          >
            <p>{ele.no}</p>
            <span>{ele.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.connect}>
        <p>Connecting... Helping... saving lives</p>
        <div className={styles.socials}>
          <img src={insta} alt="Instagram" />
          <img src={mail} alt="Email" />
          <img src={twitter} alt="Twitter" />
          <img src={call} alt="Mobile" />
        </div>
      </div>
    </main>
  );
};

export default Home;
