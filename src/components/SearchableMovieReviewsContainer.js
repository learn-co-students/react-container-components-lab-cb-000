// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: 'all'
    }
  }

  componentDidMount() {
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results
        })})
  }

  handleChange = (event) => {
    const search = event.target.value
    fetch(URL + event.target.value)
      .then(response => response.json())
      .then(reviews => {
        this.setState({
          reviews: reviews.results,
          searchTerm: search
        })
      })

  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <label>
          Search Movie Reviews:
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        </label>

        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
