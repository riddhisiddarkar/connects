import React from "react";

import styles from "./EachNGO.module.css";
import image from "../../../assets/images/childImage.png";
import website_logo from "../../../assets/icons/website.svg";

const EachNGO = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.eachngo}>
      <img src={image} alt="ngo" className={styles.eachngo_image} />
      <p className={styles.eachngo_name}>{data.name}</p>
      <p className={styles.eachngo_location}>{data.location}</p>
      <div className={styles.info}>
        <p className={styles.eachngo_type}>
          Type: {data.category[0].old && "Old age home, "}
          {data.category[0].children && "Orphange, "}
          {data.category[0].others && "Others, "}
        </p>
        <p className={styles.eachngo_email}>Email: {data.email}</p>
        <p className={styles.eachngo_phoneno}>Ph no: {data.phoneNo}</p>
      </div>
      {data.website && (
        <div className={styles.eachngo_websitediv}>
          <img
            src={website_logo}
            alt="website"
            className={styles.eachngo_websitediv_image}
          />
          <p className={styles.eachngo_websitediv_website}>{data.website}</p>
        </div>
      )}
    </div>
  );
};

export default EachNGO;
