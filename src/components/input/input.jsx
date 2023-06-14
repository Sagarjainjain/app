import React from 'react'
import "./input.css"

const Input = ({type, placeholder, className, Id, onChange}) => {
  return (
    <input id={Id} onChange={onChange} type={type} placeholder={placeholder} className={`input ${className}`}/>
  );
}

export default Input