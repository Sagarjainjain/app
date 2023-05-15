import React from "react";
import "./popularcard.css";
import cities from "../../api/populardeals.json"


const PopularCard = () => {
  return (
    <>
      <div className="section-padding ey-popular_card">
        <div className="ey-popular_card-title">
          <h2>Popular Right Now</h2>
          <p>
            Other travellers are loving these destinations. Search flights and
            hotels and we welcome you to join us on this adventure
          </p>
        </div>
        <div className="ey-grid">
          {cities.map((city) => (
            <article key={city._id} className="ey-popular_card-cards">
              <div className="ey-popular_card-cards_media">
                <img
                  src={!city.media_image ? "loading" : city.media_image}
                  alt=""
                  height="100px"
                />
              </div>
              <div className="ey-popular_card-cards_title">
                <h4>{city.title}</h4>
                <div className="ey-popular_card-cards_title-links">
                  <a href="/">Flights</a>
                  <a href="/">hotels</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCard;
