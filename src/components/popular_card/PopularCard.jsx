import React from "react";
import "./popularcard.css";
import cities from "../../api/populardeals.json"



const PopularCard = () => {

 
//  const navigation = useNavigate()
//   const handlesubmit = (value) => {
//     if(location === '/hotel') {
//       console.log("clicked")
//       localStorage.setItem('state', value)
//       navigation('/flight')
//     }
//   }
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
                  <p>{city.disc}</p>
                  {/* <p onClick={() => handlesubmit(city.title)} >Flights</p>
                  <p href="/">hotels</p> */}
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
