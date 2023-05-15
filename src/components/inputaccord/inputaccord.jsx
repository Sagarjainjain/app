import React, {useState} from 'react'
import "./inputaccord.css"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import { GiPerson } from "react-icons/gi";
import { BiHotel } from "react-icons/bi";

const InputAccord = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [personvalue, setPersonValue] = ("0")
    // const person = 0;
    const rooms = 0;
  return (
    <div className="ey-input_accord">
      <div className="ey-input_accord-card">
        <div className="ey-input_accord-input">
          <p>{personvalue} Adult</p>
          <p>{rooms} Rooms</p>
        </div>
        {isOpen ? (
          <IoIosArrowUp onClick={() => setIsOpen(false)} />
        ) : (
          <IoIosArrowDown onClick={() => setIsOpen(true)} />
        )}
      </div>
      {isOpen && 
      <div className="ey-collapsed-card">
        <div className="ey-collaped-card-input">
          <div className="ey-collaped-card-input_person">
            <GiPerson size={20} />
            <p>Person</p>
          </div>
          <div className="ey-collaped-card-input_change">
            <button type='button' >-</button>
            <p>{personvalue}</p>
            <button type='button' >+</button>
          </div>
        </div>
        <div className="ey-collaped-card-input">
          <div className="ey-collaped-card-input_person">
            <BiHotel size={20} />
            <p>Rooms</p>
          </div>
          <div className="ey-collaped-card-input_change">
            <button type='button' >-</button>
            <p>{rooms}</p>
            <button type='button' >+</button>
          </div>
        </div>
      
      </div>
      }
    </div>
  );
}

export default InputAccord