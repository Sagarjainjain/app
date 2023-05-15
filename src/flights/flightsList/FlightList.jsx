import React from "react";
import "./flightlist.css";

import flights from "../../api/flights.json";
import { AiOutlineSearch } from "react-icons/ai";
import { TbPlaneInflight } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
// import Promotion from "../../components/promotion/Promotion";
import Accordian from "../../components/accordian/Accordian";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

// const image =
//   "https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";


const FlightList = () => {

    const navigate = useNavigate();

    const handleSumbit = () => {
      navigate("/flight/search/ticket");
    }
  return (
    <>
    <Navbar/>
      <div className="ey-flight_list-header section-padding">
        <div className="ey-flight_list-header_search">
          <AiOutlineSearch />
        </div>
        <div className="ey-flight_list-header_title">
          <h2>Mumbai</h2>
          <TbPlaneInflight size={20} />
          <h2>Delhi</h2>
        </div>
      </div>
      <section className="section">
        <div className="ey-sorting">
          <h4>Sort By</h4>
          <div className="ey-sorting_buttons">
            <button type="button">Best</button>
            <button type="button">Cheapest</button>
            <button type="button">Fastest</button>
          </div>
          <Accordian/>
        </div>
        <article>
          {flights.map((flight) => (
            <div key={flight._id} className="ey-flight_lists">
              <div className="ey-flight_lists_media">
                {!flight.flightdetails ? (
                  <h1>loading</h1>
                  ) : (
                    <img
                    src={flight.flightdetails.map((item) => item.flightlogo)}
                    alt="logo"
                    />
                    )}
              </div>
                    <div className="ey-card">
              <div className="ey-flight_lists_flight-details">
                <div className="ey-flight_lists_flight-details-title">
                  <h3>{flight.departuretime}</h3>
                  <p>{flight.departure}</p>
                </div>
                <div className="ey-flight_lists_flight-details-data">
                  <p>{flight.distancetime}</p>
                  <TbPlaneInflight size={20} />
                  <p>Direct</p>
                </div>
                <div className="ey-flight_lists_flight-details-title">
                  <h3>{flight.arrivaltime}</h3>
                  <p>{flight.arrival}</p>
                </div>
              </div>
                    </div>
              <div className="ey-flight_lists_flight-price">
                <h3>₹{flight.money}</h3>
                <button type="button" onClick={handleSumbit}>Select <BsArrowRight/> </button>
              </div>
            </div>
          ))}
        </article>

      </section>
    </>
  );
}; 

export default FlightList;
