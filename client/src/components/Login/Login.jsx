import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { addUser } from "../../features/userSlice";
import ModalStyle from "../../UI/ModalStyle/ModalStyle";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginuser = () => {
    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("Successfully signed in");
        console.log(res);
        dispatch(addUser(res.data));
        localStorage.setItem("connect2dot0", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("There is an error here in logging the user in");
        console.log(err);
      });
  };

  return (
    <ModalStyle>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginText}>Login</h2>

        <Input
          title="Email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onclick={() => loginuser()} title="Login" />
        <p className={styles.or}>OR</p>
        <Button
          onclick={() => history.push("/register")}
          title="Create Account"
        />
      </div>
    </ModalStyle>
  );
};

export default Login;
