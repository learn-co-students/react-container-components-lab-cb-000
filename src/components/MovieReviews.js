import React from 'react';

const MovieReviews = (props) =>  {
  const reviews = props.reviews.map(review => {
    return (
      <div key={review.headline} className="review">
        <p><a href={review.link.url}>{review.headline}</a></p>
        <p>{review.byline}</p>
        <p>{review.summary_short}</p>
      </div>
    )
  });
  return <div className="review-list">{reviews}</div>
}


export default MovieReviews;
