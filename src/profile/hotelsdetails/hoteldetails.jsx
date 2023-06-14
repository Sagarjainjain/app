import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./hoteldetails.css"

import { IoIosArrowForward } from "react-icons/io";
import nobooking from "../../assets/nobookings.jpg"; 
import { getUser } from "../../actions/auth";
import { ClipLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';

const HotelProfileDetails = () => {
  const navigate = useNavigate()
const User = useSelector((state) => state.User);
const dispatch = useDispatch();
const id = JSON.parse(localStorage.getItem("profile")).existingUser._id;
const flight = User.map((item) => item.hotelBooking);
const userbooking = [...flight];
const user = userbooking[0];
useEffect(() => {
  dispatch(getUser(id));
}, [dispatch, id]);


const handleSubmit = (id) => {
  navigate(`/profile/hotels/${id}`)
}
if (userbooking[0] === []) return (
  <div className="ey-details">
    <div className="ey-details_container">
      <div className="ey-details_header">
        <h1>Hotel Bookings</h1>
      </div>
      <div className="ey-details_body">
        <div className="nobooking">
          <img src={nobooking} alt="no_booking" />
          <h1>No Bookings</h1>
        </div>
      </div>
    </div>
  </div>
) 

return (
  <div className="ey-details">
    <div className="ey-details_container">
      <div className="ey-details_header">
        <h1>Hotel Bookings</h1>
      </div>
      <div className="ey-details_body">
        {!user ? (
          <div className="loader">
            <ClipLoader color="hsla(194, 93%, 53%, 1)" size={40} />
          </div>
        ) : (
          user &&
          user.map((item) => (
            <div
              key={item._id}
              onClick={() => handleSubmit(item._id)}
              className="ey-details_body-list"
            >
              <div className="ey-details_body-list-item">
                <div className="ey-details_body-list-item_title">
                  <img src={item.photos[0]} alt="hotel" />
                  <p>{item.hotelname}</p>
                </div>
                <IoIosArrowForward className="ey-details_body-list-item-icon" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
}

export default HotelProfileDetails;