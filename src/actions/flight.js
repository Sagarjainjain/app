import * as api from "../api/index";
import { FETCH_FLIGHTS, FETCH_BY_SEARCH, FETCH_SINGLE_FLIGHT } from "../constants/actionType"

export const fetchFlights = () => async (dispatch) => {
    try {
        const { data } = await api.FetchFlights();

        dispatch({ type: FETCH_FLIGHTS, payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const fetchBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data }  = await api.FetchBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const FetchSingleFlight = (flightid) => async (dispatch) => {
    try {
        const { data } = await api.FetchSingleFlight(flightid);

        dispatch({ type: FETCH_SINGLE_FLIGHT,payload: data });
    } catch (error) {
        console.log(error)
    }
}