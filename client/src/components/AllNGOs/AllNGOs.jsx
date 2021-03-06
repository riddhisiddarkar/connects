import React, { useState, useEffect } from "react";

import styles from "./AllNGOs.module.css";
import EachNGO from "./EachNGO/EachNGO";
import axios from "axios";

const AllNGOs = () => {
  const [Ngos, setNgos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/ngo/all")
      .then((res) => {
        setNgos(res.data);
      })
      .catch((error) => {
        console.log("There is an error in getting the ngo");
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.allngospage}>
      <h2 className={styles.allngospage_heading}>
        <span>NGO's</span> registered with us
      </h2>
      <div className={styles.allngospage_container}>
        {Ngos.map((ele, i) => (
          <EachNGO data={ele} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllNGOs;
