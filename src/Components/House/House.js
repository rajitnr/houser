import React, { Component } from "react";
import { updateMonthlyMortgage } from "../../ducks/reducer";

const House = props => {
  let {
    id,
    property_name,
    address,
    city,
    state,
    zip_code,
    img,
    monthlyMortgage,
    desiredRent
  } = props.house;
  console.log("Props", props.house);

  return (
    <div className="house-block">
      <div className="house-img">
        <img src={img} alt="" />
      </div>
      <div className="house-detail">
        {/* <p>{id}</p> */}
        <p>
          <span className="label-text">Property Name:</span> {property_name}
        </p>
        <p>
          <span className="label-text">Address:</span>
          {address}
        </p>
        <p>
          <span className="label-text">City:</span>
          {city}
        </p>
        <p>
          <span className="label-text">State:</span>
          {state}
        </p>
        <p>
          <span className="label-text">Zip:</span>
          {zip_code}
        </p>
      </div>
      <div className="house-rental">
        <p>
          <span className="label-text">Monthly Mortgage :</span>
          {monthlyMortgage}
        </p>
        <p>
          <span className="label-text">Desired Rent :</span>
          {desiredRent}
        </p>
      </div>
      <div className="btn btn-delete" onClick={() => props.deleteHouse(id)}>
        X
      </div>
    </div>
  );
};

export default House;
