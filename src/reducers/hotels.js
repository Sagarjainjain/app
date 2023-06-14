import {
  FETCH_BY_SEARCH_HOTEL,
  FETCH_BY_HOTEL_ID,
} from "../constants/actionType";

export const hotels = (hotels = [], action) => {
  switch (action.type) {
    case FETCH_BY_SEARCH_HOTEL:
      return action.payload;
    default:
      return hotels;
  }
};

export const hotel = (hotel = [], action) => {
  switch (action.type) {
    case FETCH_BY_HOTEL_ID:
      return [action.payload];

    default:
      return hotel;
  }
};
