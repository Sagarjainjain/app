import React from "react";
import "./hotelsearch.css";
import InputAccord from '../components/inputaccord/inputaccord';
import PopularCard from '../components/popular_card/PopularCard';
// import travel from "../assets/travel.jpg";
// import deals from "../assets/deals.jpg";
import Footer from "../footer/Footer";

const HotelSearch = () => {
  return (
    <div>
      <section>
        <div className="ey-hotel_search">
          <div className="ey-hotel_search-card">
            <form>
              <div className="ey-hotel_search-card-form-group1">
                <p>Where you like to Stay?</p>
                <input id="Stay" type="text" />
              </div>
              <div className="ey-hotel_search-card-form-group1">
                <p>Check-in</p>
                <input id="Stay" type="date" />
              </div>
              <div className="ey-hotel_search-card-form-group1">
                <p>Check-out</p>
                <input id="Stay" type="date" />
              </div>
              <div className="ey-hotel_search-card-form-group2">
                <InputAccord />
              </div>
              <button type="button">Search</button>
            </form>
          </div>
        </div>
      </section>
      <div className="pop">
        <PopularCard />
      </div>
      {/* <div className="ey-deals">
        <div className="ey-travel_deals">
          <img src={travel} alt="" />
          <div className="ey-travel_deals-title">
            <h3>Get a Best Travel Experience</h3>
            <p>From the flight bookings to your hotel Stay we covered it all</p>
          </div>
        </div>
        <div className="ey-travel_deals">
          <img src={deals} alt="" />
          <div className="ey-travel_deals-title">
            <h3>Get a Best Travel Experience</h3>
            <p>From the flight bookings to your hotel Stay we covered it all</p>
          </div>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
};

export default HotelSearch;
