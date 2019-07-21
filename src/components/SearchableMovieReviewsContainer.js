import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      reviews:[],
      searchTerm:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    fetch(URL+searchTerm)
    .then(response => response.json())
    .then(reviews => this.setState({ reviews }))
  }

  render(){
    return(<div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.searchTerm} />
        <input type='submit' value='Submit' />
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>)
  }
}
