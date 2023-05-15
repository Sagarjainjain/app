import React from 'react'
import "./ticket.css"
import image from "../../assets/flight.png";
import ticket from "../../api/ticket.json"
import barcode from "../../assets/barcode.png";
import {TbPlaneInflight} from "react-icons/tb"
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <>
      {ticket.map((item) => (
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
                <p>{item.distancetime}</p>
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
                <h3>08/05/2023</h3>
              </div>
              <div className="ey-ticket_container-middle-passanger">
                <p>Passenger</p>
                <h3>1 Adult</h3>
              </div>
            </div>
            <div className="ey-ticket_container-third">
              <div className="ey-ticket_container-third-name">
                <p>Passenger name</p>
                <h4>Sagar Jain</h4>
              </div>
              <div className="ey-ticket_container-third-age">
                <p>Age</p>
                <h4>18 years</h4>
              </div>
            </div>
            <div className="ey-ticket_container-footer">
              {/* <p>Scan Barcode</p> */}
              <img src={barcode}  alt="barcode" />
              <button type='button' onClick={handleSubmit}>Make Reservation</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Ticket