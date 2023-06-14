import React, { useState} from "react";
import "./accordian.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordian = ({ setFlightData, flightData }) => {
  const [isOpen, setisOpen] = useState(false);


  return (
    <div className="ey-filter">
      <div className="ey-filter_button">
        <h3>Filter</h3>
        {!isOpen ? (
          <IoIosArrowDown onClick={() => setisOpen(true)} cursor="pointer" />
        ) : (
          <IoIosArrowUp onClick={() => setisOpen(false)} cursor="pointer" />
        )}
      </div>
      {!isOpen ? (
        <div></div>
      ) : (
        <div className="ey-filter_content">
          {/* <div className="ey-filter_content-airline">
            <p>Select Airline</p>
            {flight.map((item) => (
              <div key={item._id} className="ey-filter_content-airline-input">
                <input
                  type="checkbox"
                  name=""
                  id={item.flight_name}
                  onClick={() => Filterdata(item.flight_name)}
                />
                <label htmlFor={item.flight_name}>{item.flight_name}</label>
              </div>
            ))}
          </div> */}
          <div className="ey-filter_content-price">
            <p>Select Price</p>
            <div className="ey-filter_content-price-input">
              <p>₹ 1000</p>
              <input type="range" max={2000} min={1000} name="" id="Range" />
            </div>
          </div>
          <div className="ey-filter_content-duration">
            <p>Journey Duration</p>
            <div className="ey-filter_content-duration-input">
              <p>2 hr 20 m</p>
              <input type="range" max={20} min={10} name="" id="Range" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
