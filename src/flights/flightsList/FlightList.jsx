import React, { useEffect, useMemo } from "react";
import "./flightlist.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TbPlaneInflight } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import {ClipLoader} from "react-spinners"
import promotion from "../../assets/Promotion_page.jpg";
// import Accordian from "../../components/accordian/Accordian";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchBySearch } from "../../actions/flight";
import NoFlights from "../../components/noFlights/NoFlights";

const FlightList = () => {
  const User = localStorage.getItem("profile");
  const flights = useSelector((state) => state.flights);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSumbit = (id) => {
    if (User) {
      navigate(`/flight/search/${id}`);
    } else {
      navigate(`/signup`);
    }
  };

  const departure = searchParams.get("departure");
  const arrival = searchParams.get("arrival");
  const searchdata = { departure: departure, arrival: arrival };

  

  useEffect(() => {
    dispatch(fetchBySearch(searchdata));
  }, [dispatch]);

  // const bestfilter = () => {
  //   const cheap = Math.min(...flightsdata.map((flight) => flight.money));
  //   const cheapPrice = flightsdata.filter((item) => item.money === cheap);
  //   const fasthr = Math.min(...flightsdata.map((flight) => flight.distancehr));
  //   const fastmin = Math.min(
  //     ...flightsdata.map((flight) => flight.distancemin)
  //   );
  //   const fastest = flightsdata.filter(
  //     (item) => item.distancehr === fasthr && item.distancemin === fastmin
  //   );
  //   const bestflightlist = cheapPrice.concat(fastest);
  //   console.log(bestflightlist)

  // };

  // const fastest = () => {
  //   const fasthr = Math.min(...flightsdata.map((flight) => flight.distancehr));
  //   const fastmin = Math.min(
  //     ...flightsdata.map((flight) => flight.distancemin)
  //   );
  //   const fastest = flightsdata.filter(
  //     (item) => item.distancehr === fasthr && item.distancemin === fastmin
  //   );

  // };

  // const cheapest = () => {
  //   const cheap = Math.min(flightbookings.map((flight) => flight.money));
  //   const cheapPrice = flightbookings.filter((item) => item.money === cheap);
  // };

  if (flights === []) {
    return (
      <div className="noflights">
        <NoFlights />
      </div>
    );
  }
    return (
      <>
        <Navbar />
        <div className="ey-flight_list-header section-padding">
          <div className="ey-flight_list-header_search">
            <AiOutlineSearch />
          </div>
          <div className="ey-flight_list-header_title">
            <h2>{departure}</h2>
            <TbPlaneInflight size={20} />
            <h2>{arrival}</h2>
          </div>
        </div>
        <section className="section">
          <div className="ey-sorting">
            {/* <h4>Sort By</h4>
          <div className="ey-sorting_buttons">
            <button type="button" onClick={bestfilter}>
              Best
            </button>
            <button type="button" onClick={() => cheapest()}>
              Cheapest
            </button>
            <button type="button" onClick={() => fastest()}>
              Fastest
            </button>
          </div>
          <Accordian /> */}
          </div>
          {!flights ? (
            <div className="noflights">
              <ClipLoader/>
            </div>
          ) : (
            <article>
              {flights.map((flight) => (
                <div key={flight._id} className="ey-flight_lists">
                  <div className="ey-flight_lists_media">
                    {!flight.flightdetails ? (
                      <ClipLoader color="blue" size={20} />
                    ) : (
                      <img
                        src={flight.flightdetails.map(
                          (item) => item.flightlogo
                        )}
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
                        <p>
                          {flight.distancehr}h {flight.distancemin}m
                        </p>
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
                    <button
                      type="button"
                      onClick={() => handleSumbit(flight._id)}
                    >
                      Select <BsArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </article>
          )}
          <div className="ey-promotion">
            <img src={promotion} alt="" />
          </div>
        </section>
      </>
    );
};

export default FlightList;
