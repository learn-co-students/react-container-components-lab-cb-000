import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/query='
            + `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  makeReviews = (reviews) => {
    let results = reviews.map((review, index) => {
      return <li> <MovieReviews review={review} key={index} /></li>
    })
    this.setState({reviews: results})
  }

  searchAPI = () => {
    let endpoint = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(endpoint).then(res=> res.json()).then(json => this.makeReviews(json.results))

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }



  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onChange={() => this.searchAPI()}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      
        <ul className="review">
          {this.state.reviews.length > 0 ? this.state.reviews : ""}
        </ul>
      </div>
    )
  }

}
