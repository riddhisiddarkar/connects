import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Donate.module.css";
import {
  selectdonationid,
  selectdonationname,
} from "../../features/donationSlice";
import heart from "../../assets/icons/heart.svg";
import { donations } from "../Register/RegisterFields";
import RegisterInput from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import axios from "axios";

const Donate = () => {
  const history = useHistory();

  const donation = useSelector(selectdonationid);
  const name = useSelector(selectdonationname);
  const [type, setType] = useState("money");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userphoneNo, setUserphoneNo] = useState("");
  const [noOfPeopleAffected, setNoOfPeopleAffected] = useState(0);
  const [custom, setCustom] = useState(false);
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState("");
  useEffect(() => {
    if (!donation) history.push("/locate");
  }, []);
  const donate = () => {
    if (!username || !userEmail || !userphoneNo || !address) {
      alert("pls enter all the fields");
    } else {
      let p = {
        name: username,
        email: userEmail,
        phoneNo: userphoneNo,
        address: address,
        type: type,
      };
      if (type === "money") p["amount"] = noOfPeopleAffected;
      else if (type === "food") {
        p["food"] = food;
        p["quantity"] = quantity;
      } else {
        p["quantity"] = quantity;
        p["item"] = item;
      }
      console.log(p);
      axios
        .post(`http://localhost:5000/ngo/addpending/${donation}`, p)
        .then((res) => console.log("added"))
        .catch((error) => {
          alert("some error occures");
          console.log("There is an error here in adding donation");
          console.log(error);
        });
    }
  };
  return (
    <div className={styles.donate}>
      <p>No act of kindness, no matter how small, is ever wasted.</p>
      <img src={heart} alt="Trust" />
      <p>Donate</p>
      <div className={styles.donate_container}>
        <div className={styles.donate_container_left}>
          {donations.map((ele, i) => (
            <div
              className={styles.donate_categories}
              style={{
                background:
                  type == ele.name
                    ? `linear-gradient(90deg,#ff3d00 0%,rgba(255, 153, 0, 0.96) 208.81%)`
                    : `linear-gradient(90deg, #FF7A00 0%, rgba(255, 153, 0, 0.76) 208.81%)`,
              }}
              onClick={(e) => setType(ele.name)}
            >
              {ele.title}
            </div>
          ))}
        </div>
        <div className={styles.donate_container_right}>
          <div>
            <RegisterInput
              type="text"
              placeholder="Full Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            <RegisterInput
              type="text"
              placeholder="Phone No"
              onChange={(e) => setUserphoneNo(e.target.value)}
            />
          </div>
          <div>
            <RegisterInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div className={styles.ngo_name}>{name}</div>
          </div>
          <div>
            <RegisterInput
              type="text"
              name="address"
              placeholder="Your Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {type === "money" && (
            <div className={styles.moneydonation}>
              <p>Donate</p>
              <div className={styles.radio_btns}>
                <div>
                  <input
                    type="radio"
                    value="500"
                    name="radio_quantity"
                    onChange={(e) => {
                      setNoOfPeopleAffected(e.target.value);
                      setCustom(false);
                    }}
                  />
                  <label>₹500</label>
                </div>
                <div className={styles.donation_select}>
                  <input
                    type="radio"
                    value="1000"
                    name="radio_quantity"
                    onChange={(e) => {
                      setNoOfPeopleAffected(e.target.value);
                      setCustom(false);
                    }}
                  />
                  <label>₹1,000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="custom"
                    name="radio_quantity"
                    onChange={(e) => setCustom(true)}
                  />
                  <label>Custom</label>
                </div>
              </div>
              <div className={styles.donationsamt}>
                Total Amount:
                {custom === true ? (
                  <RegisterInput
                    name="amount"
                    placeholder="Enter amount"
                    onChange={(e) => setNoOfPeopleAffected(e.target.value)}
                  />
                ) : (
                  <div className={styles.ngo_name}>{noOfPeopleAffected}</div>
                )}
              </div>
            </div>
          )}
          {type == "food" && (
            <div className={styles.moneydonation}>
              <p>Donate</p>
              <div className={styles.radio_btns}>
                <div>
                  <input
                    type="radio"
                    value="Rice/Wheat"
                    name="radio_quantity"
                    onChange={(e) => {
                      setFood("Rice");
                      setCustom(false);
                    }}
                  />
                  <label>Rice</label>
                </div>
                <div className={styles.donation_select}>
                  <input
                    type="radio"
                    value="Biscuits"
                    name="radio_quantity"
                    onChange={(e) => {
                      setFood("Biscuits");
                      setCustom(false);
                    }}
                  />
                  <label>Biscuit</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="custom"
                    name="radio_quantity"
                    onChange={(e) => setCustom(true)}
                  />
                  <label>Custom</label>
                </div>
              </div>
              <div className={styles.donationsamt}>
                Food:
                {custom === true ? (
                  <RegisterInput
                    name="amount"
                    placeholder="Enter food product"
                    onChange={(e) => setFood(e.target.value)}
                  />
                ) : (
                  <div className={styles.ngo_name}>{food}</div>
                )}
              </div>
              <RegisterInput
                type="text"
                placeholder="Enter quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          )}
          {type == "items" && (
            <div className={styles.moneydonation}>
              <p>Donate</p>
              <div className={styles.radio_btns}>
                <div>
                  <input
                    type="radio"
                    value="Rice/Wheat"
                    name="radio_quantity"
                    onChange={(e) => {
                      setItem("Blankets");
                      setCustom(false);
                    }}
                  />
                  <label>Blanket</label>
                </div>
                <div className={styles.donation_select}>
                  <input
                    type="radio"
                    value="Clothes"
                    name="radio_quantity"
                    onChange={(e) => {
                      setItem("Clothes");
                      setCustom(false);
                    }}
                  />
                  <label>Clothes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="custom"
                    name="radio_quantity"
                    onChange={(e) => setCustom(true)}
                  />
                  <label>Custom</label>
                </div>
              </div>
              <div className={styles.donationsamt}>
                Item:
                {custom === true ? (
                  <RegisterInput
                    name="amount"
                    placeholder="Enter Item"
                    onChange={(e) => setItem(e.target.value)}
                  />
                ) : (
                  <div className={styles.ngo_name}>{item}</div>
                )}
              </div>
              <RegisterInput
                type="text"
                placeholder="Enter quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          )}
          <Button title="Donate" onclick={donate} />
        </div>
      </div>
    </div>
  );
};

export default Donate;
