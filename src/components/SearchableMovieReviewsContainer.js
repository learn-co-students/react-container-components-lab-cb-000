import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

            
	export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit = () => {
    fetch(URL + this.state.searchTerm + `api-key=${NYT_API_KEY}`)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={event => this.handleChange(event)} />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}