import React, { Component } from 'react';

const Review = (props) => {
  return (
    <div key={props.headline} className="review">
      <h3>{props.byline}</h3>
      <p>{props.summary_short}</p>
    </div>
  )
};

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(Review)}
    </div>
  )
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;