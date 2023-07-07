import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getHotelReviewsId } from "../../actions/hotels";
import reviewimg from "../../assets/review.jpg";
import "./review.css";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../actions/hotels";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ReviewSection = ({ user, params }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const hotelReview = useSelector((state) => state.hotelReview);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewData, setReviewData] = useState({
    id: user._id,
    date: Date.now(),
    username: user.username,
    disc: "",
  });
  useEffect(() => {
    setIsLoading(true);
    dispatch(getHotelReviewsId(params));
    setIsLoading(false);
  }, [dispatch, params]);

  const reviewsdata = [...hotelReview];
  const review = reviewsdata[0];
  const data = review?.slice(0, 3)

  
  const handleNavigate = () => {
    navigator(`/hotel/reviews/${params}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(reviewData.disc === "") {
      alert("Please enter a valid comment")
    } else {
      dispatch(updateReview(params, reviewData));
      navigator("/")
    }
  };

  if (!review?.length && !isLoading)
    return (
      <div className="review">
        <div className="review-input">
          <form action="" className="review-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-review"
              placeholder="Enter your Review"
              onChange={(e) =>
                setReviewData({ ...reviewData, disc: e.target.value })
              }
            />
            <button type="sumbit">Add Review</button>
          </form>
        </div>
        <div className="review-group_cards">
          <div className="review_no-review">
            <img src={reviewimg} alt="review" />
            <h1>Be the first one to Review about us!!</h1>
          </div>
        </div>
      </div>
    );

  return isLoading ? (
      <div className="review">
        <div className="review-input">
          <form action="" className="review-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-review"
              placeholder="Enter your Review"
              onChange={(e) =>
                setReviewData({ ...reviewData, disc: e.target.value })
              }
            />
            <button type="sumbit">Add Review</button>
          </form>
        </div>
        <div className="review-group_cards">
          <div className="loading">
          <ClipLoader />
          </div>
        </div>
      </div>

  ) : (
    <div className="review">
      <div className="review-input">
        <form action="" className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-review"
            placeholder="Enter your Review"
            onChange={(e) =>
              setReviewData({ ...reviewData, disc: e.target.value })
            }
          />
          <button type="sumbit">Add Review</button>
        </form>
      </div>
      <div className="review-group_cards">
        {data &&
          data.map((item) => (
            <div key={item.id + item.date} className="review-card">
              <div className="review-card_title">
                <h1>Review Added by</h1>
                <p>{item.username}</p>
              </div>
              <div className="review-card_disc">
                <p>"{item.disc}"</p>
              </div>
              <div className="review-card_footer"></div>
            </div>
          ))}
          
        {review && review.length === 0 ? (
          <div style={{ width: "1px", height: "1px" }}></div>
        ) : (
          <div
            className="review-card-view_more"
            onClick={() => handleNavigate()}
          >
            <h1>View More</h1>
            <AiOutlineArrowRight size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
