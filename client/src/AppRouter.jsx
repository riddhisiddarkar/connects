import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Locate from "./components/Locate/Locate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/locate">
          <Locate />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
