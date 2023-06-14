import React from "react";
import "./profile.css";

import { useDispatch} from "react-redux";
import { ClipLoader } from "react-spinners";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../constants/actionType";
import {deleteAccount} from "../actions/auth"

const ProfilePage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const User = JSON.parse(localStorage.getItem("profile")).existingUser;


  
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };
  const handleFlight = () => {
    navigate('/profile/flights')
  }
  const handleHotel = () => {
    navigate('/profile/hotels')
  }
  // const handleUpdate = () => {

  // }
  const handleDelete = (id) =>  {
    dispatch(deleteAccount(id, navigate))
    dispatch({ type: LOGOUT });
  }




  return (
    <div className="ey-profile">
      {!User ? (
        <div className="ey-profile_container-loader">
          <ClipLoader color="hsla(194, 93%, 53%, 1)" size={40} />
        </div>
      ) : (
        <div key={User._id} className="ey-profile_container">
          <div className="ey-profile_container_header">
            <h1>{User.username}</h1>
          </div>
          <div className="ey-profile_container_middle">
            <div className="ey-profile_container_middle-list">
              <h3>Email</h3>
              <p>{User.email}</p>
            </div>
            <div className="ey-profile_container_middle-list">
              <h3>Gender</h3>
              <p>{User.gender}</p>
            </div>
            <div className="ey-profile_container_middle-list">
              <h3>Date of Birth</h3>
              <p>{User.birthyear}</p>
            </div>
            <div
              onClick={handleFlight}
              className="ey-profile_container_middle-tab"
            >
              <h3>Flight Details</h3>
              <IoIosArrowForward className="ey-profile_container_middle-tab-icon" />
            </div>
            <div
              className="ey-profile_container_middle-tab"
              onClick={() => handleHotel()}
            >
              <h3>Hotels Details </h3>
              <IoIosArrowForward className="ey-profile_container_middle-tab-icon" />
            </div>
          </div>
          <div className="ey-profile_container_footer">
            <button type="button" id="Logout" onClick={handleLogout}>
              Log out
            </button>
            {/* <button type="button" id="update" onClick={handleUpdate}>
              Update
            </button> */}
            <button type="button" onClick={() => handleDelete(User._id)}>
              Delete My Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
