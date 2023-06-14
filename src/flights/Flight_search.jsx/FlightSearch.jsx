import React, { useState } from "react";

import "./flightsearch.css";
import Promotion from "../../components/promotion/Promotion";
import Footer from "../../footer/Footer";
import PopularCard from "../../components/popular_card/PopularCard";
import { useNavigate } from "react-router-dom";

import Navbar from "../../navbar/Navbar";
const image =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const FlightSearch = () => {
  const [search, setSearch] = useState({
    departure: "" || "Mumbai",
    arrival: "",
    departure_date: "",
    passanger: "1",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if(search.arrival === '' || search.departure_date === "" || search.passanger === '') {
      alert('Invalid Search')
    } else {
      localStorage.setItem("date", search.departure_date)
      localStorage.setItem("passanger", search.passanger)
      new URLSearchParams(
        `?departure=${search.departure}&arrival=${search.arrival}`
        );
        navigate(
          `/flight/search?departure=${search.departure}&arrival=${search.arrival}`
          );
        }
  };

  return (
    <>
      <section className="section-flight">
        <div className="ey-coverpage">
          <Navbar />
        </div>
        <div className="ey-searchbar">
          <div className="ey-serachbar_input">
            <form className="search-form" action="">
              <input
                id="Departure"
                type="text"
                defaultValue="Mumbai"
                placeholder="Departure"
                onChange={(e) =>
                  setSearch({ ...search, departure: e.target.value })
                }
              />
              <input
                id="Arrival"
                type="text"
                placeholder="Arrival"
                value={search.arrival}
                onChange={(e) =>
                  setSearch({ ...search, arrival: e.target.value })
                }
              />
              <div className="ey-serachbar_input-group">
                <input
                  id="Date"
                  placeholder="Add Date"
                  type="date"
                  
                  onChange={(e) =>
                    setSearch({ ...search, departure_date: e.target.value })
                  }
                />
                <input
                  id="Arrival"
                  type="number"
                  placeholder="Add Passanger"
                  defaultValue="1"
                  onChange={(e) =>
                    setSearch({ ...search, passanger: e.target.value })
                  }
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
        <PopularCard   />
        <Promotion image_url={image} />
        <Footer />
      </section>
    </>
  );
};

export default FlightSearch;
