import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../constants";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: 0,
      img: ""
    };
  }

  handleChangeEvent = (event, key) => {
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = () => {
    let { property_name, address, city, state, zip_code, img } = this.state;
    axios
      .post(`${BASE_URL}/houses`, {
        property_name,
        address,
        city,
        state,
        zip_code,
        img
      })
      .then(response => {
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="dashboard-panel">
        <div className="wizard-panel">
          <h1>Add New Listing</h1>
          <Link to="/">
            <div className="btn btn-.">Cancel</div>
          </Link>
        </div>
        <div className="create-panel">
          <div className="input-box">
            <label htmlFor="property_name">Property Name</label>
            <input
              type="text"
              id="property_name"
              maxLength="100"
              style={{ width: "50%" }}
              onChange={event => this.handleChangeEvent(event, "property_name")}
            />
          </div>

          <div className="input-box">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              maxLength="500"
              style={{ width: "100%" }}
              onChange={event => this.handleChangeEvent(event, "address")}
            />
          </div>
          <div className="city-state-zip">
            <div className="input-box">
              <label htmlFor="city">City</label>
              <input
                type="text"
                maxLength="50"
                id="city"
                onChange={event => this.handleChangeEvent(event, "city")}
              />
            </div>

            <div className="input-box">
              <label htmlFor="state">State</label>
              <input
                type="text"
                maxLength="2"
                minLength="0"
                id="state"
                onChange={event => this.handleChangeEvent(event, "state")}
              />
            </div>

            <div className="input-box">
              <label htmlFor="zip_code">Zip Code</label>
              <input
                type="number"
                name=""
                id="zip_code"
                maxLength="6"
                onChange={event => this.handleChangeEvent(event, "zip_code")}
              />
            </div>
          </div>
        </div>
        <div className="submit-panel">
          <div className="btn" onClick={this.handleSubmit}>
            Complete
          </div>
        </div>
      </div>
    );
  }
}
export default Wizard;
