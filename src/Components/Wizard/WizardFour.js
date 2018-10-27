import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { BASE_URL } from "../../constants";

class WizardFour extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: 0,
      img: "",
      monthlyMortgage: 0,
      desiredRent: 0,
      postSuccessful: false
    };
  }
  handleSubmit = () => {
    let {
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthlyMortgage,
      desiredRent
    } = this.props;
    axios
      .post(`${BASE_URL}/houses`, {
        property_name,
        address,
        city,
        state,
        zip_code,
        img,
        monthlyMortgage,
        desiredRent
      })
      .then(response => {
        this.setState({ postSuccessful: true });
      });
  };

  componentDidMount = () => {
    let {
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthlyMortgage,
      desiredRent
    } = this.props;
    this.setState({
      property_name: property_name,
      address: address,
      city: city,
      state: state,
      zip_code: zip_code,
      img: img,
      monthlyMortgage: monthlyMortgage,
      desiredRent: desiredRent
    });
  };
  render() {
    let {
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthlyMortgage,
      desiredRent
    } = this.state;

    return (
      <div className="dashboard-panel">
        {this.state.postSuccessful && <Redirect to="/" />}
        <div className="wizard-panel">
          <h1>Add New Listing</h1>
          <Link to="/">
            <div className="btn btn-cancel">Cancel</div>
          </Link>
        </div>
        <div className="create-panel">
          <div className="review-box">
            <div className="review-box-c1">
              <div className="review-box-l1">
                <div className="label-text"> Property Name</div>
                <div className="input-text">{property_name}</div>
              </div>
              <div className="review-box-l1">
                <div className="label-text"> Address</div>
                <div className="address-display">
                  <div className="input-text">{address}</div>
                  <div className="input-text">{city}</div>
                  <div className="input-text">{state}</div>
                  <div className="input-text">{zip_code}</div>
                </div>
              </div>
              <div className="review-box-l1">
                <div className="label-text"> Monthly Mortgage</div>
                <div className="input-text">{monthlyMortgage}</div>
              </div>
              <div className="review-box-l1">
                <div className="label-text"> Desired Rent</div>
                <div className="input-text">{desiredRent}</div>
              </div>
            </div>
            <img src={img} alt="" className="review-box-c2" />
          </div>
        </div>
        <div className="submit-panel">
          <Link to="/wizard/step3">
            <div className="btn">Back</div>
          </Link>
          <div className="btn" onClick={this.handleSubmit}>
            Complete
          </div>
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
    zip_code: state.zip_code,
    img: state.img,
    monthlyMortgage: state.monthlyMortgage,
    desiredRent: state.desiredRent
  };
};

export default connect(
  mapStateToProps,
  {}
)(WizardFour);
