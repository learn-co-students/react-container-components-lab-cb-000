// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({review, key}) => {
  return(
    <div className="review" data-key={key}>
      <a href={review.link.url} target="_blank"  >{review.display_title} </a>
    </div>
  )
}

export default MovieReviews
