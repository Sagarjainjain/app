import React from 'react'
import "./noflight.css"
import noFLights  from "../../assets/noflights.png";
import {useNavigate} from "react-router-dom"

const NoFlights = () => {
    const navigate = useNavigate()

    const handlesubmit = () => {
        navigate("/flight")
    }
  return (
    <div className='ey-noFlight'>
        <img src={noFLights} alt="" />
        <p>No Flights Available</p>
        <button type='button' onClick={handlesubmit}>Search Again</button>
    </div>
  )
}

export default NoFlights