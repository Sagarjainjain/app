import React, { useEffect } from "react";
import "./hoteldetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotelId } from "../../actions/hotels";
import {updateHotelBooking} from "../../actions/auth"
import Navbar from "../../navbar/Navbar";
import { AiFillStar } from "react-icons/ai";

const HotelDetails = () => {
  const navigate = useNavigate()
  const hotel = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile")).existingUser;
  const Id = user._id;
  const params = useParams().id;
  
  const handleSubmit = () => {
    if(hotel) {
      const HotelBooking = hotel.shift() 
      dispatch(updateHotelBooking(Id, HotelBooking))
      navigate("/")
    }
  }



  useEffect(() => {
    dispatch(getHotelId(params));
  }, [dispatch, params]);
  return (
    <>
      <Navbar />
      <div className="hoteldetails-container-details">
        <div className="hoteldetails-images">
          <div className="hoteldetails-images-1">
            <img
              className="image-1"
              src={hotel.map((item) => item.photos[0])}
              alt="Hotel-1"
            />
          </div>
          <div className="hoteldetails-images-2">
            <img
              className="image-2"
              src={hotel.map((item) => item.photos[1])}
              alt="Hotel-2"
            />
            <img
              className="image-3"
              src={hotel.map((item) => item.photos[2])}
              alt="Hotel-3"
            />
          </div>
          <div className="hoteldetails-images-3">
            <img
              className="image-4"
              src={hotel.map((item) => item.photos[3])}
              alt="Hotel-4"
            />
            <img
              className="image-5"
              src={hotel.map((item) => item.photos[4])}
              alt="Hotel-5"
            />
          </div>
        </div>
        {hotel.map((item) => (
          <div key={item._id} className="hoteldetails-title">
            <div className="hoteldetails-title-1">
              <div className="hoteldetails-title-rating">
                <h1>{item.hotelname}</h1>
                <h3>
                  <AiFillStar color="#f4c430" />
                  {item.rating}
                </h3>
              </div>
              <p>{item.hotelplace}</p>
              <div className="hoteldetails-title-2">
                <h4>About the Property</h4>
                <p>{item.about}</p>
              </div>
              <div className="hoteldetails-title-3">
                <div className="hoteldetails-title-3_1">
                  <h5>Check-In</h5>
                  <p>{item.checkin}:00 pm</p>
                </div>
                <div className="hoteldetails-title-3_1">
                  <h5>Check-out</h5>
                  <p>{item.checkout}:00 pm</p>
                </div>
              </div>
              <div className="hoteldetails-footer">
                <div className="hoteldetails-footer-price">
                  <h5>₹ {item.price}/-</h5>
                  <p>Per Night</p>
                </div>
                <button type="button" onClick={() => handleSubmit()}>
                  Make My Reservation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelDetails;
