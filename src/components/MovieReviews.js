import React, { Component } from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list" >
      <h2> movie review </h2>
      {props.reviews.map((review) =>{
        <div className="review">
        <p> {review.headline} </p>
        <p> {review.display_title} </p>
        <p> {review.link.url} </p>
        </div>
      })}
    </div>
  )
}

export default MovieReviews ;
