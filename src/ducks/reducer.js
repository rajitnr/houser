import { bindActionCreators } from "react-redux";

const initialState = {
  id: 0,
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
  img: "",
  monthlyMortgage: 0,
  desiredRent: 0
};

const initialProductList = [];

const UPDATE_PRODUCT_LIST = "UPDATE_PRODUCT_LIST";
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP_CODE = "UPDATE_ZIP_CODE";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";

export function updatePropertyName(propertyName) {
  return {
    type: UPDATE_PROPERTY_NAME,
    payload: propertyName
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZipCode(zipCode) {
  return {
    type: UPDATE_ZIP_CODE,
    payload: zipCode
  };
}
export function updateImg(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}

export function updateHouseList(houseList) {}

export function updateMonthlyMortgage(monthlyMortgage) {
  return {
    type: UPDATE_MONTHLY_MORTGAGE,
    payload: monthlyMortgage
  };
}

export function updateDesiredRent(desiredRent) {
  return {
    type: UPDATE_DESIRED_RENT,
    payload: desiredRent
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROPERTY_NAME:
      return {
        ...state,
        property_name: action.payload
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
        zip_code: action.payload
      };
    case UPDATE_IMG:
      return {
        ...state,
        img: action.payload
      };
    case UPDATE_MONTHLY_MORTGAGE:
      return {
        ...state,
        monthlyMortgage: action.payload
      };
    case UPDATE_DESIRED_RENT:
      return {
        ...state,
        desiredRent: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
