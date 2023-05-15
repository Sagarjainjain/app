import React from "react";
// import coverpage from "../../assets/flightpagecover.png";
import "./flightsearch.css";
import Promotion from "../../components/promotion/Promotion"
import Footer from "../../footer/Footer"
import PopularCard from "../../components/popular_card/PopularCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const image = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"


const FlightSearch = () => {


  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/flight/search");
  }



  return (
    <>
    <section className="section-flight">
      <div className="ey-coverpage">
    <Navbar/>
      </div>
      <div className="ey-searchbar">
        <div className="ey-serachbar_input">
          <form className="search-form" action="">
            <input id="Departure" type="text" placeholder="Departure" />
            <input id="Arrival" type="text" placeholder="Arrival" />
            <div className="ey-serachbar_input-group">
              <input id="Date" placeholder="Add Date" type="datetime-local" />
              <input id="Arrival" type="number" placeholder="Add Passanger" />
            </div>
            <button type="button" onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
      <PopularCard/>
      <Promotion image_url={image}/>
      <Footer/>
    </section>
    </>
  );
};

export default FlightSearch;
