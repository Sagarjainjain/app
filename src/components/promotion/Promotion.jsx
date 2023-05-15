import React from 'react'
import "./promotion.css"

const Promotion = ({image_url}) => {
  return (

      <div className="ey-promotion">
        <img src={image_url} alt="promotion" />
      </div>

  );
}

export default Promotion