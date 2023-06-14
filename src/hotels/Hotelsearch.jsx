import React, { useState } from "react";
import "./hotelsearch.css";
import InputAccord from "../components/inputaccord/inputaccord";
import PopularCard from "../components/popular_card/PopularCard";
// import travel from "../assets/travel.jpg";
// import deals from "../assets/deals.jpg";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const HotelSearch = () => {
  const [searchdata, setSearchData] = useState({
    hotelPlace: "",
    checkin: "",
    checkout: "",
  })
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchdata.hotelPlace === "" || searchdata.checkin === "" || searchdata.checkout === "" ) {
      alert("Please fill all the fields")
    } else {

      new URLSearchParams(`/search?hotelplace${searchdata.hotelPlace}`)
      navigate(`/hotel/search?hotelplace=${searchdata.hotelPlace}`)
      console.log(searchdata.hotelPlace);
    }
  }
  return (
    <div>
      <section>
        <div className="ey-hotel_search">
          <div className="ey-hotelsearch">
            <h1>Where you like to Stay?</h1>
            <div className="ey-hotel_search-card">
              <form className="form" onSubmit={handleSubmit}>
                <div className="ey-hotel_search-card-form-group10">
                  <input
                    id="Stay"
                    type="text"
                    placeholder="Select Your City"
                    onChange={(e) =>
                      setSearchData({
                        ...searchdata,
                        hotelPlace: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="ey-hotel_search-card-form-group1">
                  <p>Check-in</p>
                  <input
                    id="Stay"
                    type="date"
                    onChange={(e) =>
                      setSearchData({
                        ...searchdata,
                        checkin: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="ey-hotel_search-card-form-group1">
                  <p>Check-out</p>
                  <input
                    id="Stay"
                    type="date"
                    onChange={(e) =>
                      setSearchData({
                        ...searchdata,
                        checkout: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="ey-hotel_search-card-form-group2">
                  <InputAccord />
                </div>
                <button type="submit">Search</button>
              </form>
            </div>
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
      <Footer />
    </div>
  );
};

export default HotelSearch;
