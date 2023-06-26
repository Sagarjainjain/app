import * as api from "../api/index";
import {
  AUTH,
  AUTH_USER,
  AUTH_CREATE,
  AUTH_BOOKING_UPDATE,
  AUTH_HOTEL_BOOKING_UPDATE,
  DELETEACCOUNT,
  LOGOUT
} from "../constants/actionType";

export const createNewAccount = (formdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createAccount(formdata);

    dispatch({ type: AUTH_CREATE, data });
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};
export const loginAccount = (formdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.loginAccount(formdata);
    dispatch({ type: AUTH, data });
    navigate('/')
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getUser = (userid) => async (dispatch) => {
  try {
    const { data } = await api.getUser(userid);

    dispatch({ type: AUTH_USER, payload: data });
  } catch (error) {
    const status = error.response.status
    if(status === 404) {
      dispatch({type: LOGOUT })
    }

  }
};
export const updateBooking = (id, booking) => async (dispatch) => {
  try {
    const { data } = await api.updatebooking(booking, id);
    console.log(data.flightbookings)
    dispatch({ type: AUTH_BOOKING_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateHotelBooking = (id, booking) => async (dispatch) => {
  try {
    const { data } = await api.updateHotelBooking(booking, id);
    console.log(data.flightbookings)
    dispatch({ type: AUTH_HOTEL_BOOKING_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAccount = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteAccount(id);
    dispatch({type: DELETEACCOUNT, payload: id})
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}