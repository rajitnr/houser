import { bindActionCreators } from "react-redux";

const initialState = {
  id: 0,
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip_code: 0,
  img: ""
};

const initialProductList = [];

const UPDATE_PRODUCT_LIST = "UPDATE_PRODUCT_LIST";
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP_CODE = "UPDATE_ZIP_CODE";
const UPDATE_IMG = "UPDATE_IMG";

export function updatePropertyName(propertyName) {
  console.log("Reducer Action", UPDATE_PROPERTY_NAME);
  return {
    type: UPDATE_PROPERTY_NAME,
    payload: propertyName
  };
}
export function updateAddress(address) {
  console.log("Reducer Action", UPDATE_ADDRESS);
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  console.log("Reducer Action", UPDATE_CITY);
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  console.log("Reducer Action", UPDATE_STATE);
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZipCode(zipCode) {
  console.log("Reducer Action", UPDATE_ZIP_CODE);
  return {
    type: UPDATE_ZIP_CODE,
    payload: zipCode
  };
}
export function updateImg(img) {
  console.log("Reducer Action", UPDATE_IMG);
  return {
    type: UPDATE_IMG,
    payload: img
  };
}

export function updateHouseList(houseList) {
  console.log("Reducer action");
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROPERTY_NAME:
      return {
        ...state,
        propertyName: action.payload
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case UPDATE_STATE:
      return {
        ...state,
        state: action.payload
      };
    case UPDATE_ZIP_CODE:
      return {
        ...state,
        zipCode: action.payload
      };
    case UPDATE_IMG:
      return {
        ...state,
        img: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
