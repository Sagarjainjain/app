import {
  FETCH_BY_SEARCH_HOTEL,
  FETCH_BY_HOTEL_ID,
  FETCH_HOTELREVIEW_BY_ID,
  UPDATE_REVIEW
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

export const hotelReview = (hotelReview = [], action) => {
  switch (action.type) {
    case FETCH_HOTELREVIEW_BY_ID:
      return [action.payload];
    case UPDATE_REVIEW:
      return hotelReview.map((item) => item._id === action.payload._id ? action.payload : hotelReview)
    default:
      return hotelReview;
  }
}