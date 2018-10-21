import React, { Component } from "react";
import "./App.css";

import Dashboard from "../src/Components/Dashboard/Dashboard";
import Header from "../src/Components/Header/Header";
// import House from "../src/Components/House/House";
// import Wizard from "../src/Components/Wizard/Wizard";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Dashboard /> */}
        {/* <House /> */}
        {/* <Wizard /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
