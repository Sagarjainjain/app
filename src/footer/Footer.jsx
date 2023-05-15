import React from 'react'
import "./footer.css"
import logo  from "../assets/Travel_logo_2.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-brand'>
      <img src={logo} alt="" />
      <h1>Explore Yourself</h1>
      </div>
      <p>Version 1.0</p>
    </div>
  )
}

export default Footer