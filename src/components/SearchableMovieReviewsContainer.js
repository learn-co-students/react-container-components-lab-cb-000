import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleSearchInputChange = e => this.setState({ searchTerm: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const searchTerm = this.state.searchTerm
    const S_URL = URL.concat(`&query=${searchTerm}`)

    fetch(S_URL)
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;
