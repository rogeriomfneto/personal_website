import React from "react";
import Main from "./Main";
import Tcc from "./Tcc";
import { Switch, Route, Redirect } from "react-router";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/mac0499/" component={Tcc}/>
      <Redirect from="*" to="/"/>
    </Switch>
  )
}

export default Routes;
