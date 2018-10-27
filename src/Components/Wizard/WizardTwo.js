import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";

import { updateImg } from "../../ducks/reducer";

// import { BASE_URL } from "../../constants";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
  componentDidMount = () => {
    this.setState({ img: this.props.img });
  };
  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    console.log(this.props);

    return (
      <div className="dashboard-panel">
        <div className="wizard-panel">
          <h1>Add New Listing</h1>
          {/* <Link to="/wizard/step1"> */}
          <Link to="/">
            <div className="btn btn-cancel">Cancel</div>
          </Link>
        </div>
        <div className="create-panel">
          <div className="input-box">
            <label htmlFor="img">Property Image</label>
            <input
              type="text"
              id="img"
              maxLength="100"
              value={this.state.img}
              style={{ width: "50%" }}
              onChange={event => this.handleChange("img", event.target.value)}
            />
          </div>
        </div>
        <div className="submit-panel">
          <Link to="/wizard/step1">
            <div className="btn ">Back</div>
          </Link>

          <Link to="/wizard/step3">
            <div
              className="btn"
              onClick={() => this.props.updateImg(this.state.img)}
            >
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
    img: state.img
  };
};

export default connect(
  mapStateToProps,
  { updateImg }
)(Wizard);
