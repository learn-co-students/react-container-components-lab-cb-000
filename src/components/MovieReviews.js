// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
     {reviews.map((review, index) => <div className="review" key={index}>{review.display_title}</div>)}
   </div>
)

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
