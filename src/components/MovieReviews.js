// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => (
  <div className='review-list'>
  <ul>
    {reviews.map((review) => <li className='review'>{review.display_title} - {review.mpaa_rating}</li>)}
  </ul>
  </div>
)

export default MovieReviews;
