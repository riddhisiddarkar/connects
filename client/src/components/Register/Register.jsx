import React from "react";

import styles from "./Register.module.css";
import RegisterInput from "../../UI/Input/Input";
import handshake from "../../assets/icons/handshake.svg";
import CheckBox from "../../UI/CheckBoxes/CheckBoxes";
import Button from "../../UI/Button/Button";

const Register = () => {
  const category = [
    {
      title: "Old Age Home",
    },
    {
      title: "Orphange",
    },
    {
      title: "Women",
    },
    {
      title: "other",
    },
  ];
  const donations = [
    {
      title: "Money",
    },
    {
      title: "Food",
    },
    {
      title: "Items",
    },
  ];
  return (
    <div className={styles.regiterpage}>
      <h2>Create Account</h2>
      <div className={styles.registerform_component}>
        <form className={styles.registerform}>
          <div className={styles.registerform_row}>
            <div className={styles.buttonWrap}>
              <label className={styles.button} htmlFor="upload">
                +
              </label>
              <input id="upload" type="file" />
              <span className={styles.uploadImage}>Upload Image</span>
            </div>
            <RegisterInput title="NGO name" type="text" />
          </div>

          <div className={styles.registerform_row}>
            <RegisterInput title="Email" type="email" />
            <RegisterInput title="Password" type="password" />
          </div>
          <div className={styles.registerform_row}>
            <RegisterInput type="text" title="Phone No" />
            <RegisterInput type="text" title="Location" />
          </div>
          <p className={styles.checkboc_category}>Category</p>
          <div className={styles.registerform_checkbox_row}>
            <CheckBox options={category} />
          </div>
          <p className={styles.checkboc_category}>Donations</p>
          <div className={styles.registerform_checkbox_row}>
            <CheckBox options={donations} />
            <span style={{ opacity: "0" }}>pl</span>
          </div>

          <div className={styles.registerform_row}>
            <RegisterInput title="Website URL" type="text" />
          </div>
          <div className={styles.create_account}>
            <Button />
            <p>
              Account details and donor details to your NGO will be displayed in
              the dashboard
            </p>
          </div>
          <p className={styles.already_account}>Already have an account?</p>
          <Button />
        </form>
        <img src={handshake} alt="handshake" className={styles.handshake} />
      </div>
      <div className={styles.extraspace}></div>
    </div>
  );
};

export default Register;
