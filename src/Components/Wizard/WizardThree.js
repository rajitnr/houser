import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { BASE_URL } from "../../constants";
import { updateMonthlyMortgage, updateDesiredRent } from "../../ducks/reducer";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      monthlyMortgage: 0,
      desiredRent: 0
    };
  }
  componentDidMount = () => {
    this.setState({
      monthlyMortgage: this.props.monthlyMortgage,
      desiredRent: this.props.desiredRent
    });
  };
  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };
  handleSave = () => {
    this.props.updateDesiredRent(this.state.desiredRent);
    this.props.updateMonthlyMortgage(this.state.monthlyMortgage);
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
            <label htmlFor="monthlyMortgage">Monthly Mortgage</label>

            <input
              type="number"
              id="monthlyMortgage"
              maxLength="10"
              minLength="0"
              style={{ width: "50%" }}
              value={this.state.monthlyMortgage}
              onChange={event =>
                this.handleChange("monthlyMortgage", event.target.value)
              }
            />
          </div>

          <div className="input-box">
            <label htmlFor="desiredRent">Desired Rent</label>
            <input
              type="number"
              id="desiredRent"
              maxLength="500"
              style={{ width: "100%" }}
              value={this.state.desiredRent}
              onChange={event =>
                this.handleChange("desiredRent", event.target.value)
              }
            />
          </div>
        </div>
        <div className="submit-panel">
          <Link to="/wizard/step2">
            <div className="btn">Back</div>
          </Link>

          <Link to="/wizard/step4">
            <div className="btn" onClick={this.handleSave}>
              Review
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    monthlyMortgage: state.monthlyMortgage,
    desiredRent: state.desiredRent
  };
};

export default connect(
  mapStateToProps,
  { updateDesiredRent, updateMonthlyMortgage }
)(Wizard);
