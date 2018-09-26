import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  handleSearch = e => {
    const searchTerm=  handleInput

    fetchReviews(searchTerm)
  }

  fetchReviews = (searchTerm="") => {
    const FULL_URL = URL + `?query=${searchTerm}`
    //fetch reviews and manipulate them into tidy arrays
    //store those array in this.state.reviews:
    fetch(FULL_URL)
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
      <div class="searchable-movie-reviews">
        <h1>Search Movie Reviews</h1>
        <form onSubmit={this.handleSearch}>
          <input type="text" />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer;
