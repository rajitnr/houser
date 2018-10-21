import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "../../Routes";

const Header = props => {
  return (
    <div className="header-panel">
      <div className="header-panel-1">
        <Link to="/">
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="logo"
          />
        </Link>
      </div>
      <div className="header-panel-2">
        <Link to="/">
          <h1>Houser</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
