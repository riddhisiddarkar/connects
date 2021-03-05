import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Locate from "./components/Locate/Locate";
import { addUser } from "./features/userSlice";
import AppRouter from "./AppRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("connect2dot0")) {
      const k = JSON.parse(localStorage.getItem("connect2dot0"));
      dispatch(addUser(k));
    }
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
