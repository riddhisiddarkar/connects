import React, { useState } from "react";

import styles from "./ReportProblem.module.css";
import ModalStyle from "../../UI/ModalStyle/ModalStyle";
import CheckBox from "../../UI/CheckBoxes/CheckBoxes";
import { categorys } from "../Register/RegisterFields";
import Button from "../../UI/Button/Button";

const ReportProblem = () => {
  const [problem, setProblem] = useState("");
  const [noOfPeopleAffected, setNoOfPeopleAffected] = useState(10);
  const [category, setCategory] = useState({
    old: false,
    children: false,
    women: false,
    other: false,
  });

  const addproblem = (e) => {
    e.preventDefault();
  };

  const selectcategory = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <ModalStyle>
      <form className={styles.reportProblem}>
        <h2>Let us know</h2>
        <p>Problem</p>
        <textarea minLength={50} onChange={(e) => setProblem(e.target.value)} />
        <p>No of people affected</p>
        <div className={styles.radio_btns}>
          <div>
            <input
              type="radio"
              value="10"
              name="radio_quantity"
              onChange={(e) => setNoOfPeopleAffected(e.target.value)}
            />
            <label>Less than 10</label>
          </div>
          <div>
            <input
              type="radio"
              value="20"
              name="radio_quantity"
              onChange={(e) => setNoOfPeopleAffected(e.target.value)}
            />
            <label>10-30</label>
          </div>
          <div>
            <input
              type="radio"
              value="45"
              name="radio_quantity"
              onChange={(e) => setNoOfPeopleAffected(e.target.value)}
            />
            <label>More than 30</label>
          </div>
        </div>
        <p>Category</p>
        <div className={styles.checkboxes}>
          <CheckBox options={categorys} onchange={(e) => selectcategory(e)} />
        </div>
        <Button title="Report" onclick={(e) => addproblem(e)} />
      </form>
    </ModalStyle>
  );
};

export default ReportProblem;
