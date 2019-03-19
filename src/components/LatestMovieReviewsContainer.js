import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Iu5OvsSMnrfFVzTJ8aHzsqIl2GO8GLgg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      reviews: []
    };
  }
  
  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  
  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;