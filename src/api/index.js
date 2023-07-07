import axios from "axios";


const API = axios.create({
  // baseURL: "https://exploreyourself-sever-production.up.railway.app/",
  baseURL: "http://localhost:5000/",
});

API.interceptors.request.use((req) => {
  if(localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
})

// flights
export const FetchFlights = () => API.get('flights');
export const FetchBySearch = (SearchQuery) =>
  API.get(
    `flights/search?departure=${SearchQuery.departure}&arrival=${SearchQuery.arrival}`
  );
export const FetchSingleFlight = (flightid) => API.get(`flights/${flightid}`)

// hotels
export const FetchBySearchHotel = (SearchQuery) => API.get(`/hotel/search?hotelplace=${SearchQuery}`)
export const FetchbyId = (id) => API.get(`/hotel/${id}`);
export const FetchReviewsById = (id) => API.get(`hotel/reviews/${id}`)
export const updateReview = (id, reviewData) => API.patch(`/hotel/reviews/${id}`, reviewData);

// users 
export const createAccount = (userData) => API.post('user/signin', userData )
export const deleteAccount = (id) => API.delete(`/user/users/${id}`)
export const loginAccount = (userData) => API.post('user/login', userData )
export const getUser = (userid) => API.get(`user/login/${userid}`)
export const updatebooking = (booking, id) =>
  API.patch(`user/book/${id}`, booking);
export const updateHotelBooking = (hotelBooking, id) => API.patch(`user/hotelbook/${id}`, hotelBooking);