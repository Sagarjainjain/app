import { FETCH_BY_SEARCH, FETCH_SINGLE_FLIGHT } from "../constants/actionType";

export const flights = (flights = [], action) => {
  switch (action.type) {
    // case FETCH_FLIGHTS:
    //   return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload
    default:
        return flights;
  }
};

export const flight = (flight = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_FLIGHT:
      return [action.payload]

    default:
      return flight;
  }
}