import React, { useEffect } from "react";
import "./hotelticket.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotelId } from "../../actions/hotels";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import { AiFillStar } from "react-icons/ai";

const HotelTicket = () => {
  const hotel = useSelector((state) => state.hotel);
  const dispatch = useDispatch();
  const params = useParams().id;

  useEffect(() => {
    dispatch(getHotelId(params));
  }, [dispatch, params]);
  return (
    <>
      <Navbar />
      <div className="hotel-container-details">
        <div className="hotel-images">
          <div className="hotel-images-1">
            <img
              className="image-1"
              src={hotel.map((item) => item.photos[0])}
              alt="Hotel-1"
            />
          </div>
          <div className="hotel-images-2">
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
          <div className="hotel-images-3">
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
          <div key={item._id} className="hotel-title">
            <div className="hotel-title-1">
              <div className="hotel-title-rating">
                <h1>{item.hotelname}</h1>
                <h3>
                  <AiFillStar color="#f4c430" />
                  {item.rating}
                </h3>
              </div>
              <p>{item.hotelplace}</p>
              <div className="hotel-title-2">
                <h4>About the Property</h4>
                <p>{item.about}</p>
              </div>
              <div className="hotel-title-3">
                <div className="hotel-title-3_1">
                  <h5>Check-In</h5>
                  <p>{item.checkin}:00 pm</p>
                </div>
                <div className="hotel-title-3_1">
                  <h5>Check-out</h5>
                  <p>{item.checkout}:00 pm</p>
                </div>
              </div>
              <div className="hotel-footer">
                <div className="hotel-footer-price">
                  <h5>₹ {item.price}/-</h5>
                  <p>Per Night</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelTicket;
