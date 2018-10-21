import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route path="/" component={Login} exact /> */}
          <Route path="/" component={Dashboard} exact />
          {/* <Route path="/home" component={Dashboard} /> */}
          <Route path="/wizard" component={Wizard} exact />
          {/* <Route path="/edit/:id" component={UpdateForm} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
