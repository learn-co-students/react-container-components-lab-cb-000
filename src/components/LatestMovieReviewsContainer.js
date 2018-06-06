import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6329402312c04b4a8397df38d2df7c18';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {
   fetch(URL)
     .then(response => response.json())
     .then((reviews => this.setState({reviews})))
 }

  render(){
    return(
      <div className = 'latest-movie-reviews'>
        {
          <MovieReviews reviews={this.state.reviews} />
          
        }
      </div>
    )
  }
}
