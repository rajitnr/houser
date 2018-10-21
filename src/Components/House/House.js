import React, { Component } from "react";

const House = props => {
  let { id, property_name, address, city, state, zip_code, img } = props.house;
  return (
    <div className="house-block">
      <div className="house-detail">
        {/* <p>{id}</p> */}
        <p>Property Name: {property_name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip_code}</p>
        {/* <img src={img} alt="" /> */}
      </div>
      <div className="btn btn-delete" onClick={() => props.deleteHouse(id)}>
        X
      </div>
    </div>
  );
};

export default House;
