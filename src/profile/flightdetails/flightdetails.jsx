import React from "react";
import "./flightdetails.css"
import { TbPlaneInflight } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import userdetails from "../../api/user.json";

const FlightDetails = () => {
  return (
    <div className="ey-details">
      <div className="ey-details_container">
        <div className="ey-details_header">
          <h1>Flight Details</h1>
        </div>
        <div className="ey-details_body"> 
          {userdetails.map((item) => (
            <div className="ey-details_body-list">
              {item.flight_booking.map((details) => (
                <div className="ey-details_body-list-item">
                  <div className="ey-details_body-list-item_title">
                    <p>{details.departure}</p>
                    <TbPlaneInflight />
                    <p>{details.arrival}</p>
                  </div>
                  <IoIosArrowForward className="ey-details_body-list-item-icon" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
