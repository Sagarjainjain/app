import React, {useEffect} from 'react'
import "./flightticket.css"
import Navbar from "../../navbar/Navbar";
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleFlight } from "../../actions/flight";
import image from "../../assets/flight.png";
import barcode from "../../assets/barcode.png";
import { TbPlaneInflight } from "react-icons/tb";

const FlightTicketDetails = () => {
const Flight = useSelector((state) => state.flight);
const param = useParams();
const dispatch = useDispatch();
const User = JSON.parse(localStorage.getItem("profile")).existingUser;

const age = 2023 - User.birthyear;

useEffect(() => {
  dispatch(FetchSingleFlight(param.id));
}, [dispatch, param.id]);
return (
  <>
    <Navbar />
    <div className="ey-ticket">
      {Flight.map((item) => (
        <div key={item._id} className="ey-ticket_container">
          <div className="ey-ticket_container-header">
            <h1>{item.departure}</h1>
            <img src={image} alt="flight" />
            <h1>{item.arrival}</h1>
          </div>
          <div className="ey-ticket_container-middle">
            <div className="ey-ticket_container-middle_time">
              <h2>{item.departuretime}</h2>
              <div className="ey-ticket_container-middle_time-arrow">
                <p>
                  {item.distancehr}h{item.distancemin}m
                </p>
                <TbPlaneInflight />
                <img
                  src={item.flightdetails.map((data) => data.flightlogo)}
                  height={50}
                  alt=""
                />
              </div>
              <h2>{item.arrivaltime}</h2>
            </div>
            {/* <div className="ey-ticket_container-middle-second">
              <div className="ey-ticket_container-middle-date">
                <p>Date</p>
                <h3>{date}</h3>
              </div>
              <div className="ey-ticket_container-middle-passanger">
                <p>Passenger</p>
                <h3>{passanger} Adult</h3>
              </div>
            </div> */}
            <div className="ey-ticket_container-third">
              <div className="ey-ticket_container-third-name">
                <p>Passenger name</p>
                <h4>{User.username}</h4>
              </div>
              <div className="ey-ticket_container-third-age">
                <p>Age</p>
                <h4>{age}</h4>
              </div>
            </div>
            <div className="ey-ticket_container-footer">
              {/* <p>Scan Barcode</p> */}
              <img src={barcode} alt="barcode" />
              {/* <button type="button" onClick={onClick}>
                Make Reservation
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
}

export default FlightTicketDetails