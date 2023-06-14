import React from "react";
import "./NoHotel.css";

const NoHotel = ({ cityname }) => {
  return (
    <>
      <div className="nohotel-container">
        <div className="no-hotel">
          <p>{cityname}</p>
        </div>
      </div>
    </>
  );
};

export default NoHotel;
