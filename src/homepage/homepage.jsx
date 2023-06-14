import React from "react";
import logo from "../assets/Travel_Logo_1.jpg";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "./homepage.css";
import promotion from "../assets/Promotion_page.jpg";
import Footer from "../footer/Footer";
import Promotion from "../components/promotion/Promotion";
import { Link, useNavigate } from "react-router-dom"
// import {fetchFlights} from "../actions/flight"
// import { useSelector , useDispatch} from "react-redux"

const HomePage = () => {
  const navigate = useNavigate()
  const User = localStorage.getItem("profile");

  const Handlenavigation = () => {
    if(User) {
      navigate("/profile")
    } else {
      navigate("/login")
    }
  }

  return (
    <>
      <section className="section-homepage">
        <nav>
          <div className="nav-brand">
            <img src={logo} alt="brand_logo" />
            <h1>Explore Yourself</h1>
          </div>
          <div className="logo-profile">
            
          <CgProfile onClick={Handlenavigation}    className="brand"
           />
        
          </div>
        </nav>
        <div className="ey-options section-padding">
          <div className="ey-options_flight">
            <Link to="/flight">
              <div className="ey-option_flight_button">
                <MdOutlineFlightTakeoff
                  className="ey-option_flight_button_icon"
                  color="white"
                />
              </div>
            </Link>
            <p>Flights</p>
          </div>
          <div className="ey-options_flight">
            <Link to="/hotel">
            <div className="ey-option_flight_button">
              <FaHotel className="ey-option_flight_button_icon" color="white" />
            </div>
            </Link>
            <p>Hotels</p>
          </div>
        </div>
        <Promotion image_url={promotion} />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
