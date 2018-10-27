import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import WizardOne from "./Components/Wizard/WizardOne";
import WizardTwo from "./Components/Wizard/WizardTwo";
import WizardThree from "./Components/Wizard/WizardThree";
import WizardFour from "./Components/Wizard/WizardFour";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route path="/" component={Login} exact /> */}
          <Route path="/" component={Dashboard} exact />
          {/* <Route path="/home" component={Dashboard} /> */}
          <Route path="/wizard" component={Wizard} exact />
          <Route path="/wizard/step1" component={WizardOne} exact />
          <Route path="/wizard/step2" component={WizardTwo} exact />
          <Route path="/wizard/step3" component={WizardThree} exact />
          <Route path="/wizard/step4" component={WizardFour} exact />
          {/* <Route path="/edit/:id" component={UpdateForm} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
