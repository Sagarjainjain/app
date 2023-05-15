import React from 'react'
import "./flightticket.css"
import Ticket from '../../components/ticket/Ticket'
import Navbar from '../../navbar/Navbar'

const FlightTicket = () => {
  return (
    <>
      <Navbar/>
    <div className='ey-ticket'>
      <Ticket/>
    </div>
    </>
  )
}

export default FlightTicket