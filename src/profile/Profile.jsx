import React from "react";
import "./profile.css";
import user from "../api/user.json";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate()

  const handleUpdate = () => {
    navigate("/signup")
  }
  const handleDelete = () => {
    navigate("/login")
  }




  return (
    <div className="ey-profile">
      {user.map((item) => (
        <div key={item._id} className="ey-profile_container">
          <div className="ey-profile_container_header">
            <img src={item.profileimage} alt="" />
            <h1>{item.username}</h1>
          </div>
          <div className="ey-profile_container_middle">
            <div className="ey-profile_container_middle-list">
              <h3>Email</h3>
              <p>{item.email}</p>
            </div>
            <div className="ey-profile_container_middle-list">
              <h3>Gender</h3>
              <p>{item.gender}</p>
            </div>
            <div className="ey-profile_container_middle-list">
              <h3>Date of Birth</h3>
              <p>{item.dateofBirth}</p>
            </div>
            <div className="ey-profile_container_middle-tab">
              <h3>Flight Details</h3>
              <IoIosArrowForward className="ey-profile_container_middle-tab-icon" />
            </div>
            <div className="ey-profile_container_middle-tab">
              <h3>Hotels Details </h3>
              <IoIosArrowForward className="ey-profile_container_middle-tab-icon" />
            </div>
          </div>
          <div className="ey-profile_container_footer">
            <button type="button" onClick={handleUpdate}>Update</button>
            <button type="button" onClick={handleDelete}>Delete My Account</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
