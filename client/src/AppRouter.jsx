import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AllNGOs from "./components/AllNGOs/AllNGOs";

import Locate from "./components/Locate/Locate";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import ReportProblem from "./components/ReportProblem/ReportProblem";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
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
        <Route path="/ngos">
          <AllNGOs />
        </Route>
        <Route path="/reportproblem">
          <ReportProblem />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
