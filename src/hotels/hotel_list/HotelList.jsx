import React, { useEffect } from "react";
import "./hotellist.css";
import Navbar from "../../navbar/Navbar";
import { AiFillStar } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { getBySearch } from "../../actions/hotels";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import promotion from "../../assets/Promotion_page.jpg";
import NoHotel from "../../components/noHotel/NoHotel";
import {ClipLoader} from "react-spinners"

const HotelList = () => {
  const navigator = useNavigate();
  const hotel = useSelector((state) => state.hotels);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const User = localStorage.getItem("profile");
  const searchQuery = searchParams.get("hotelplace");

  useEffect(() => {
    dispatch(getBySearch(searchQuery));
  }, [dispatch, searchQuery]);

  const handelClick = (id) => {
    if (!User) {
      navigator("/signup");
    } else {
      navigator(`/hotel/${id}`);
    }
  };
  if(hotel === []) {
    return <NoHotel cityname={searchQuery} />;
  } 

    return (
    <>
      <Navbar />
      <div className="hotel-header">
        <div className="hotel-header-title">
          <FaBed className="icon-hotel" />
          <h1>{searchQuery}</h1>
        </div>
      </div>
      <div className="hotel-container">
        <div className="hotel-filter"></div>
        {!hotel ? (
          <ClipLoader/>
          ) : (
            <div className="hotel_list">
            {hotel.map((hotelData) => (
              <div key={hotelData._id} className="hotel_list-card">
                <div className="hotel_list-card-image">
                  <img src={hotelData.photos[0]} alt="" />
                </div>
                <div className="hotel_list-card-title">
                  <div className="hotel_list-card-title-1">
                    <div className="title">
                      <h1>{hotelData.hotelname}</h1>
                      <p id="rating">
                        {hotelData.rating} <AiFillStar />
                      </p>
                    </div>
                    <p>{hotelData.hotelplace}</p>
                  </div>
                  <div className="hotel_list-card-title-2">
                    <p>{hotelData.about}</p>
                  </div>
                  <div className="hotel_list-card-footer">
                    <h2>₹ {hotelData.price}/-</h2>
                    <button onClick={() => handelClick(hotelData._id)}>
                      View Hotel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="hotel-promotion">
          <img src={promotion} alt="promotion" />
        </div>
      </div>
    </>
  );
};

export default HotelList;
