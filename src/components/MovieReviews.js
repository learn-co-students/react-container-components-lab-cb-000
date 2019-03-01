import React from 'react';

 const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(function(review, i){
      return (
        <div key={i} className="review">
          <h2><a href={review.link}>{review.display_title}</a></h2>
          <h4>{review.byline}</h4>
          <p>{review.summary_short}</p>
        </div>
      )
    })}
  </div>
)

 MovieReviews.defaultProps = {
  reviews: []
};

 export default MovieReviews;