import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })})
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })});
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleClick}>
          <label htmlFor='search'>Search Reviews</label>
          <input id='search' type="text" value={this.state.searchTerms} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
