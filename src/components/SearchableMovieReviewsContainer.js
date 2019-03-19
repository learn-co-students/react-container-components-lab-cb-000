import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Iu5OvsSMnrfFVzTJ8aHzsqIl2GO8GLgg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const query = this.state.searchTerm;
    
    fetch(URL + `&query=${query}`)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results })
    );
  }
  
  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }
  
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search term:</label>
          <input
            id="search-input"
            type="text"
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        
        {this.state.reviews.length > 0 &&
          <h2>Review Search Results</h2>
        }
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;