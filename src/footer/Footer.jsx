import React from 'react'
import "./footer.css"
import logo  from "../assets/Travel_logo_2.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-brand'>
      <img src={logo} alt="Brand-logo" />
      <h1>Explore Yourself</h1>
      <p>Its Practice Based Project it cannot directly book or reserve flights and hotels</p>
      </div>
      <p>Version 1.1</p>
    </div>
  )
}

export default Footer