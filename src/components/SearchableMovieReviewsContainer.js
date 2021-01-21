import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // if (this.state.searchTerm) {
    //   this.fetchWithSearch()
    // } // it was a nice idea but tests no likey
    fetch(URL + '&query=' + this.state.searchTerm)
    .then(response => response.json())
    .then(reviewsData => this.setState({reviews: reviewsData.results}))
  }

  // tests were also not pleased that I separated the handleSubmit method from the fetch method. Jeez. 
  
  // fetchWithSearch = () => {
  //   fetch(URL + '&query=' + this.state.searchTerm)
  //   .then(response => response.json())
  //   .then(reviewsData => this.setState({reviews: reviewsData.results}))
  // }

  // OMG, I wish it had said somewhere that a test will fail (even if everything works) *unless* the prop is called precisely "reviews"!
  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Find Movie Reviews by Search Term</h1>

        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="searchTerm" 
            onChange={this.handleChange} 
            value={this.state.searchTerm} />
          <button type="submit">Search</button>
        </form>

        <MovieReviews reviews={ this.state.reviews } />

      </div>
    )
  }
}
export default SearchableMovieReviewsContainer