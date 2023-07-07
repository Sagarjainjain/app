import React, { useEffect, useState } from "react";
// import { AiFillStar } from "react-icons/ai";
import "./reviewlist.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotelReviewsId } from "../../../actions/hotels";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ReviewList = () => {
  const dispatch = useDispatch();
  const hotelReview = useSelector((state) => state.hotelReview);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams().id;
  const reviewsdata = [...hotelReview];
  const review = reviewsdata[0];

  useEffect(() => {
    setIsLoading(true);
    dispatch(getHotelReviewsId(params));
    setIsLoading(false);
  }, [dispatch, params]);

  if (!review?.length && !isLoading)
    return (
      <div className="no_review">
        <h1>No Reviews</h1>
      </div>
    );
  return isLoading ? (
    <div>
      <ClipLoader />
    </div>
  ) : (
    <div className="review-list">
      <div className="review-list_container">
        <h2>Reviews</h2>
        <div className="review-list_container_groups">
          {review &&
            review.map((item) => (
              <div key={item.id + item.date} className="review-card-list">
                <div className="review-card-list_title">
                  <h1>Review Added by</h1>
                  <p>{item.username}</p>
                </div>
                <div className="review-card-list_disc">
                  <p>"{item.disc}"</p>
                </div>
                <div className="review-card-list_footer"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
