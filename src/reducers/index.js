import { combineReducers} from "redux"
import {flights, flight} from "./flight"
import {authReducers, User} from "./auth";
import { hotels ,hotel, hotelReview} from "./hotels";


export const reducers = combineReducers({ flights: flights, flight: flight, authReducers: authReducers, User: User, hotels: hotels, hotel: hotel, hotelReview: hotelReview   })