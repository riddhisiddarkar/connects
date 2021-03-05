import React from "react";

import styles from "./ReportProblem.module.css";
import ModalStyle from "../../UI/ModalStyle/ModalStyle";
import CheckBox from "../../UI/CheckBoxes/CheckBoxes";
import { categorys } from "../Register/RegisterFields";
import Button from "../../UI/Button/Button";

const ReportProblem = () => {
  return (
    <ModalStyle>
      <div className={styles.reportProblem}>
        <h2>Let us know</h2>
        <p>Problem</p>
        <textarea minLength={50} />
        <p>No of people affected</p>
        <div className={styles.radio_btns}>
          <div>
            <input type="radio" value="10" id="radio_quantity" />
            <label>Less than 10</label>
          </div>
          <div>
            <input type="radio" value="10" id="radio_quantity" />
            <label>Less than 10</label>
          </div>
          <div>
            <input type="radio" value="10" id="radio_quantity" />
            <label>Less than 10</label>
          </div>
        </div>
        <p>Category</p>
        <div className={styles.checkboxes}>
          <CheckBox options={categorys} />
        </div>
        <Button title="Report" />
      </div>
    </ModalStyle>
  );
};

export default ReportProblem;
