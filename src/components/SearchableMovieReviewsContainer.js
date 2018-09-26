import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

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

  fetchReviews = (searchTerm=null) => {
    const FULL_URL = !!searchTerm ? URL + `&query=${searchTerm}` : URL
    var reviews = [];
    fetch(FULL_URL)
	    .then(function(response) {
		     if (response.status >= 400) { throw new Error("Bad response from server"); }
		     return response.json();
	    })
	    .then(function(resp) {
		     var reviews_arr = resp['results'].map(r => {
           var review = {movie_name: r["display_title"],
             link: r["link"], summary: r["summary_short"]}
           return review;
         })
         reviews = reviews_arr;
         console.log("Reviews");
         console.log(reviews);
      });
      this.setState({ reviews: reviews })
  }

  handleSubmit = e => {
    const searchTerm = this.state.searchTerm;
    this.fetchReviews(searchTerm);
    e.preventDefault();
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
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
