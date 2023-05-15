import React from 'react'
import "./input.css"

const Input = ({type, placeholder, className, Id}) => {
  return (
    <input id={Id} type={type} placeholder={placeholder} className={`input ${className}`}/>
  );
}

export default Input