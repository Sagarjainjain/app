import * as api from "../api/index";
import {FETCH_BY_SEARCH_HOTEL, FETCH_BY_HOTEL_ID} from "../constants/actionType"

export const getBySearch = (SearchQuery) => async (dispatch) => {
  try {
    const { data } = await api.FetchBySearchHotel(SearchQuery);
    dispatch({ type: FETCH_BY_SEARCH_HOTEL, payload: data })
  } catch (error) {
    console.log(error)
  }
};

export const getHotelId = (id) => async (dispatch) => {
  try {
    const { data} = await api.FetchbyId(id)
     dispatch({ type: FETCH_BY_HOTEL_ID, payload: data });
  } catch (error) {
    console.log(error)
  }
}