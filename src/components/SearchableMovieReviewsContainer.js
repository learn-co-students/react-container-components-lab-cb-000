import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'DE4GU4RCLAbZWYWA9nSATIO4dBlm6y1M';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewContainer extends Component {
    constructor() {
        super();

        this.state = {
            searchTerm: '',
            reviews: []
        };
    }
    handleSearchInputChange = event => this.setState({searchTerm: event.target.value});
    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({reviews: res.results}));

    }
render() {
    // debugger;
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input
            id='search-input'
            type="text"
            style={{width: 300}}
            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
          
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewContainer;