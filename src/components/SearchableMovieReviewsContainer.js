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
      reviews: [],
      searchTerm: null
    }
  }

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    const searchTerm = this.state.searchTerm;
    fetchReviews(searchTerm);
    e.preventDefault();
  }

  fetchReviews = (searchTerm=null) => {
    const FULL_URL = !!searchTerm ? URL + `?query=${searchTerm}` : URL
    
    fetch(FULL_URL)
	    .then(function(response) {
		     if (response.status >= 400) { throw new Error("Bad response from server"); }
		     return response.json();
	    })
	    .then(function(resp) {
		     var reviews = resp['results'].map(r => {
           var review = {movie_name: r["display_title"],
             link: r["link"], summary: r["summary_short"]}
           return review;
         })
         this.setState({ reviews })
      });
  }

  render {
    return (
      <div class="searchable-movie-reviews">
        <h1>Search Movie Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearchTermChange} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer;
