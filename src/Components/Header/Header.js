import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "../../Routes";

const Header = props => {
  return (
    <div className="header-panel">
      <div className="header-panel-1">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qUzJKcFx52aqPln9RUJ87CcuCt4C-bPcTf3LNluF-9bm9Kpb"
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
