import React from "react";
// import coverpage from "../../assets/flightpagecover.png";
import "./flightsearch.css";
// import Promotion from "../../components/promotion/Promotion"
import Footer from "../../footer/Footer"
import PopularCard from "../../components/popular_card/PopularCard";
import { useNavigate } from "react-router-dom";



const FlightSearch = () => {


  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/flight/search");
  }



  return (
    <section className="section-flight">
      <div className="ey-coverpage">
        <div className="ey-brand">
          <h1>Explore Yourself</h1>
          
        </div>
        
      </div>
      <div className="ey-searchbar">
        <div className="ey-serachbar_input">
          <form action="">
            <input id="Departure" type="text" placeholder="Departure" />
            <input id="Arrival" type="text" placeholder="Arrival" />
            <div className="ey-serachbar_input-group">
              <input id="Date" type="datetime-local" />
              <input id="Arrival" type="number" placeholder="Add Passanger" />
            </div>
            <button type="button" onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
      <PopularCard/>
      {/* <Promotion image_url={image}/> */}
      <Footer/>
    </section>
  );
};

export default FlightSearch;
