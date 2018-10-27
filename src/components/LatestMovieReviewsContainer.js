import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  constructor(){
    super();

    this.state = {
      reviews: []
    }
  }

  getReviews = () => {
    fetch(URL).then(res => res.json()).then(reviews => {this.makeReviews(reviews.results)})
  }

  makeReviews = (reviews) => {
    let results = reviews.map((review, index) => <li><MovieReviews review={review} key={index} /></li>)
    this.setState({reviews: results})
  }



  render(){
    this.getReviews
    return(
      <div className="latest-movie-reviews">
        <button onClick={this.getReviews}>Latest Reviews</button>
        <ul className="review-list">
          {this.state.reviews.length > 0 ? this.state.reviews : '' }
        </ul>
      </div>

    )
  }
}
