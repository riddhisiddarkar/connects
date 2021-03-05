import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./Register.module.css";
import RegisterInput from "../../UI/Input/Input";
import handshake from "../../assets/icons/handshake.svg";
import CheckBox from "../../UI/CheckBoxes/CheckBoxes";
import Button from "../../UI/Button/Button";
import { categorys, donations } from "./RegisterFields";
import storage from "../../firebase";
import axios from "axios";

const Register = () => {
  const [image, setImage] = useState("");
  const addngo = (e) => {
    const id = uuid();
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${id}`).put(image);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(id)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            const p = info;
            p["category"] = category;
            p["image"] = fireBaseUrl;
            accepting.money ? (p["money"] = true) : (p["money"] = false);
            accepting.food ? (p["food"] = true) : (p["food"] = false);
            accepting.Items ? (p["item"] = true) : (p["item"] = false);
            axios
              .post("http://localhost:5000/user/register", p)
              .then((res) => console.log("Successfully added data"))
              .catch((error) => {
                console.log("There is error here in adding the ngo");
                console.log(error);
              });
          });
      }
    );
  };
  const selectImage = (e) => {
    console.log(e.target.files.length);
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log(e.target.value);
        // setImage([e.target.value]);
      };
      reader.readAsDataURL(e.target.files[0]); // convert to base64 string
    }
  };

  const onproductstatechange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    location: "",
    image: "",
    website: "",
  });
  const [accepting, setAccepting] = useState({
    money: true,
    food: false,
    Items: false,
  });
  const [category, setCategory] = useState({
    old: false,
    children: false,
    women: false,
    other: false,
  });
  const selectcategory = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.checked,
    });
  };
  const selectaccepting = (event) => {
    setAccepting({
      ...accepting,
      [event.target.name]: event.target.checked,
    });
  };
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
              <input id="upload" type="file" onChange={(e) => selectImage(e)} />
              <span className={styles.uploadImage}>Upload Image</span>
            </div>
            <RegisterInput
              title="NGO name"
              type="text"
              name="name"
              onChange={(e) => onproductstatechange(e)}
            />
          </div>

          <div className={styles.registerform_row}>
            <RegisterInput
              title="Email"
              type="email"
              name="email"
              onChange={(e) => onproductstatechange(e)}
            />
            <RegisterInput
              title="Password"
              type="password"
              name="password"
              onChange={(e) => onproductstatechange(e)}
            />
          </div>
          <div className={styles.registerform_row}>
            <RegisterInput
              type="text"
              title="Phone No"
              name="phoneno"
              onChange={(e) => onproductstatechange(e)}
            />
            <div>
              <p className={styles.selectLocationsHeading}>Select Location</p>
              <select
                className={styles.selectLocation}
                onChange={(e) =>
                  setInfo({
                    ...info,
                    ["location"]: e.target.value,
                  })
                }
              >
                <option></option>
                <option value="Tulsi Bagh">Tulsi Bagh</option>
                <option value="Sanivar Wada">Sanivar Vada</option>
              </select>
            </div>
          </div>
          <p className={styles.checkboc_category}>Category</p>
          <div className={styles.registerform_checkbox_row}>
            <CheckBox options={categorys} onchange={(e) => selectcategory(e)} />
          </div>
          <p className={styles.checkboc_category}>Donations</p>
          <div className={styles.registerform_checkbox_row}>
            <CheckBox
              options={donations}
              onchange={(e) => selectaccepting(e)}
            />
            <span style={{ opacity: "0" }}>pl</span>
          </div>

          <div className={styles.registerform_row}>
            <RegisterInput
              title="Website URL"
              type="text"
              name="website"
              onChange={(e) => onproductstatechange(e)}
            />
          </div>
          <div className={styles.create_account}>
            <Button title="Create account" onclick={(e) => addngo(e)} />
            <p>
              Account details and donor details to your NGO will be displayed in
              the dashboard
            </p>
          </div>
          <p className={styles.already_account}>Already have an account?</p>
          <Button title="Login" />
        </form>
        <img src={handshake} alt="handshake" className={styles.handshake} />
      </div>
      <div className={styles.extraspace}></div>
    </div>
  );
};

export default Register;
