import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  updatePropertyName,
  updateAddress,
  updateCity,
  updateState,
  updateZipCode
} from "../../ducks/reducer";

class WizardOne extends Component {
  constructor() {
    super();
    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: 0
    };
  }
  componentDidMount = () => {
    this.setState({
      property_name: this.props.property_name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip_code: this.props.zip_code
    });
  };
  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };
  handleSave = () => {
    let { property_name, address, city, state, zip_code } = this.state;

    this.props.updatePropertyName(property_name);
    this.props.updateAddress(address);
    this.props.updateCity(city);
    this.props.updateState(state);
    this.props.updateZipCode(zip_code);
  };
  render() {
    return (
      <div className="dashboard-panel">
        <div className="wizard-panel">
          <h1>Add New Listing</h1>
          <Link to="/">
            <div className="btn btn-cancel">Cancel</div>
          </Link>
        </div>
        <div className="create-panel">
          <div className="input-box">
            <label htmlFor="property_name">Property Name</label>
            <input
              type="text"
              id="property_name"
              value={this.state.property_name}
              maxLength="100"
              style={{ width: "50%" }}
              onChange={event =>
                this.handleChange("property_name", event.target.value)
              }
            />
          </div>

          <div className="input-box">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={this.state.address}
              maxLength="500"
              style={{ width: "100%" }}
              onChange={event =>
                this.handleChange("address", event.target.value)
              }
            />
          </div>
          <div className="city-state-zip">
            <div className="input-box">
              <label htmlFor="city">City</label>
              <input
                type="text"
                maxLength="50"
                id="city"
                value={this.state.city}
                onChange={event =>
                  this.handleChange("city", event.target.value)
                }
              />
            </div>

            <div className="input-box">
              <label htmlFor="state">State</label>
              <input
                type="text"
                maxLength="2"
                minLength="0"
                id="state"
                value={this.state.state}
                onChange={event =>
                  this.handleChange("state", event.target.value)
                }
              />
            </div>

            <div className="input-box">
              <label htmlFor="zip_code">Zip Code</label>
              <input
                type="number"
                name=""
                id="zip_code"
                value={this.state.zip_code}
                maxLength="6"
                onChange={event =>
                  this.handleChange("zip_code", event.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="submit-panel">
          <div>
            <Link to="/" className="btn">
              Back
            </Link>
          </div>
          <Link to="/wizard/step2">
            <div className="btn" onClick={this.handleSave}>
              Next Step
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    property_name: state.property_name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip_code: state.zip_code
  };
};

// export default WizardOne;
export default connect(
  mapStateToProps,
  {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZipCode
  }
)(WizardOne);
