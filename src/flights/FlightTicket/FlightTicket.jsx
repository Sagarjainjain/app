import React, { useEffect } from "react";
import "./flightticket.css";
import Ticket from "../../components/ticket/Ticket";
import Navbar from "../../navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleFlight } from "../../actions/flight";
import { updateBooking } from "../../actions/auth";

const FlightTicket = () => {
  const Flight = useSelector((state) => state.flight);
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = localStorage.getItem("date");
  const passanger = localStorage.getItem("passanger");
  const user = JSON.parse(localStorage.getItem("profile")).existingUser;
  const Id = user._id;
  const newFlight = [...Flight];
  const flights = newFlight.shift();


  const handleSubmit = () => {
    if (flights) {
      const newbooking = {
        id: flights._id,
        departure: flights.departure,
        arrival: flights.arrival,
        departuretime: flights.departuretime,
        arrivaltime: flights.arrivaltime,
        distancehr: flights.distancehr,
        distancemin: flights.distancemin,
        money: flights.money,
        flightlogo: flights.flightdetails.map((item) => item.flightlogo),
        Date: date,
        Passanger: passanger,
      };
      dispatch(updateBooking(Id, newbooking));
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch(FetchSingleFlight(param.id));
  }, [dispatch, param.id]);
  return (
    <>
      <Navbar />
      <div className="ey-ticket">
        <Ticket
          onClick={() => handleSubmit()}
          Flight={Flight}
          date={date}
          passanger={passanger}
          User={user}
        />
      </div>
    </>
  );
};

export default FlightTicket;
