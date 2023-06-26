import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const User = JSON.parse(localStorage.getItem("profile"));

  const handleProfile = () => {
    if (!User) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  const handleback = () => {
    navigate("/");
  };
  return (
    <nav className="navbar">
      <IoIosArrowBack onClick={handleback} className="navbar-button" />

      <h1>Explore Yourself</h1>
      <div className="navbar-profile">
        <CgProfile onClick={handleProfile} className="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
