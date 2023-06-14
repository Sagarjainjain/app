import React from 'react'
import "./ticket.css"
import image from "../../assets/flight.png";
import barcode from "../../assets/barcode.png";
import {TbPlaneInflight} from "react-icons/tb"

const Ticket = ({ Flight, date, passanger, User, onClick }) => {

  const age =  2023 - User.birthyear;
  return (
    <>
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
            <div className="ey-ticket_container-middle-second">
              <div className="ey-ticket_container-middle-date">
                <p>Date</p>
                <h3>{date}</h3>
              </div>
              <div className="ey-ticket_container-middle-passanger">
                <p>Passenger</p>
                <h3>{passanger} Adult</h3>
              </div>
            </div>
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
              <button  type="button" onClick={ onClick}>
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Ticket