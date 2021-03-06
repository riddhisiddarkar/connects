import React from "react";
import Button from "../../../UI/Button/Button";

import styles from "./NGOLocate.module.css";
import { adddonation } from "../../../features/donationSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NGOLocate = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const donate = (id) => {
    dispatch(adddonation(id));
    history.push("/donate");
  };

  return (
    <div className={styles.ngolocate_container}>
      <div className={styles.ngolocate_details}>
        <p>{data.name}</p>
        <p>
          Phone No: <span>{data.phoneNo}</span>
        </p>
      </div>
      <Button
        title="Donate"
        onclick={() =>
          donate({
            id: data._id,
            name: data.name,
          })
        }
      />
    </div>
  );
};

export default NGOLocate;
