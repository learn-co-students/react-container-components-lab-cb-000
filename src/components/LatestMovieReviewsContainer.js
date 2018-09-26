import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews = fetchReviews()
    }
  }

  fetchReviews = () => {
    //TODO:fetch reviews and manipulate them into tidy arrays
      //store those array in this.state.reviews:
    fetch(URL)
	    .then(function(response) {
		     if (response.status >= 400) { throw new Error("Bad response from server"); }
		     return response.json();
	    })
	    .then(function(json) {
		     var reviews = json.map(r => )
         this.setState({ reviews })
      });
  }

  render {
    return (
      <div class="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
