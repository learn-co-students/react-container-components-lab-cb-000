import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className = "review-list">
    {
    reviews.map(review =>
      <div className = "review">
        <p>{ review.display_title }</p>
        <p>{ review.headline }</p>
        <p>{ review.opening_day }</p>
      </div>
    )
  }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
