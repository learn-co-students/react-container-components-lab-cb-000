// Code MovieReviews Here
import React from 'react';

// const Review = ({ title, headline, summary, date }) => (
//   <div className="review">
//     <h3>{ title }</h3>
//     <h3>{ headline }</h3>
//     <p>{ summary }</p>
//     <p>{ date }</p>
//   </div>
// )
//
//
// const MovieReviews = ({ reviews }) => (
//   <div className="review-list">
//     {reviews.map(review => <Review title={review.display_title} headline={review.headline} summary={review.summary_short} date={review.publication_date}/>)}
//   </div>
// )

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => <div className="review"><h3>{review.display_title}</h3></div>)}
  </div>
)

export default MovieReviews;
