import {
  AUTH,
  AUTH_USER,
  LOGOUT,
  AUTH_CREATE,
  AUTH_BOOKING_UPDATE,
  AUTH_HOTEL_BOOKING_UPDATE,
  DELETEACCOUNT
} from "../constants/actionType";

export const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case AUTH_CREATE: 
    return { ...state, authData: action.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export const User = ( User = [], action) => {
  switch (action.type) {
    case AUTH_USER:
      return [action.payload];
    case AUTH_BOOKING_UPDATE:
      return User.map((item) =>
        item._id === action.payload._id ? action.payload : User
      );
    case AUTH_HOTEL_BOOKING_UPDATE:
      return User.map((item) =>
        item._id === action.payload._id ? action.payload : User
      );
    case DELETEACCOUNT:
      return User.filter((user) => user._id !== action.payload);
    default:
      return User;
  }
}