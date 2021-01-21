import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(reviewsData => this.setState({ reviews: reviewsData.results }))
  }

 // OMG, I wish it had said somewhere that a test will fail (even if everything works) *unless* the prop is called precisely "reviews"!
  render() {
    return (
      <div className='latest-movie-reviews'>
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer