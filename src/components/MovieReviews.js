import React from 'react'

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => <div className="review"><h3>{review.display_title}</h3></div>)}
  </div>
)

export default MovieReviews;