import React from "react";

import { Switch, Route } from "react-router-dom";

import SignIn from "../components/SignIn";
import Home from "../components/home";
import Welcome from "../components/welcome";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={Welcome} />
    </Switch>
  </div>
);
export default Main;
