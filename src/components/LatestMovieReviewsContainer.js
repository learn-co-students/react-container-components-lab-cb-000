import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cbTv1EzjVGRMCAAAHkopgoUnRLXkUpaG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?order=by-publication-date&'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {reviews: []}
    var that = this;
    fetch(URL)
    .then(res => res.json())
    .then(function(json){
      that.setState({
        reviews: json.results
      })
    })
  }
  render(){
    return (
      <div className="latest-movie-reviews" >
        <h1>Latest movie container </h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer ;
