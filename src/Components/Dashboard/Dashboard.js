import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { BASE_URL } from "../../constants";
import House from "../House/House";
// import { updateHouseList } from "../../ducks/reducer";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  componentDidMount = () => {
    axios.get(`${BASE_URL}/houses`).then(response => {
      this.setState({ houses: response.data });
    });
  };
  deleteHouse = id => {
    axios.delete(`${BASE_URL}/houses/${id}`).then(response => {
      this.setState({ houses: response.data });
    });
  };
  render() {
    let { houses } = this.state;
    return (
      <div className="dashboard-panel">
        <div className="dashboard-header">
          <Link to="/">
            <div className="dashboard-text">Dashboard</div>
          </Link>
          <Link to="/wizard">
            <div className="btn btn-primary">Add New Property</div>
          </Link>
        </div>
        <div className="houses-panel">
          <h1>Home Listings</h1>
          {houses.map(house => {
            return (
              <House
                key={house.id}
                house={house}
                deleteHouse={id => this.deleteHouse(id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     id: state.id,
//     property_name: state.property_name,
//     address: state.address,
//     city: state.city,
//     state: state.state,
//     zip_code: state.zip_code,
//     img: state.img
//   };
// };

// export default connect(
//   mapStateToProps,
//   { updateHouseList }
// )(Dashboard);

export default Dashboard;
