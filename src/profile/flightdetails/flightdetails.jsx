import React, { useEffect } from "react";
import "./flightdetails.css"
import { TbPlaneInflight } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import {useSelector, useDispatch} from "react-redux"
import {getUser} from "../../actions/auth"
import { ClipLoader}  from 'react-spinners'
import nobooking from "../../assets/nobookings.jpg"; 
import { useNavigate } from "react-router-dom";

const FlightDetails = () => {
  const User = useSelector((state) => state.User);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = JSON.parse(localStorage.getItem("profile")).existingUser._id;
  const flight = User.map((item) => item.flightbookings);
  const userbooking = [...flight]
  const user = userbooking[0];
  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch, id]);

  const handleSubmit = (id) => {
    navigate(`/profile/flights/${id}`)
  }
  if (userbooking[0] === [])
    return (
      <div className="ey-details">
        <div className="ey-details_container">
          <div className="ey-details_header">
            <h1>Flight Details</h1>
          </div>
          <div className="ey-details_body">
            <div className="nobooking">
              {!nobooking ? <ClipLoader/> : 
              <img src={nobooking} alt="no_booking" />}
              <h1>No Bookings</h1>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="ey-details">
      <div className="ey-details_container">
        <div className="ey-details_header">
          <h1>Flight Bookings</h1>
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
                key={item.date}
                onClick={() => handleSubmit(item.id)}
                className="ey-details_body-list"
              >
                <div className="ey-details_body-list-item">
                  <div className="ey-details_body-list-item_title">
                    <p>{item.departure}</p>
                    <TbPlaneInflight />
                    <p>{item.arrival}</p>
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
};

export default FlightDetails;
