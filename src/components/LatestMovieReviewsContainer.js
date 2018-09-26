import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: this.fetchReviews()
    }
  }

  fetchReviews = () => {
    var reviews;
    fetch(URL)
	    .then(function(response) {
		     if (response.status >= 400) { throw new Error("Bad response from server"); }
		     return response.json();
	    })
	    .then(function(resp) {
        var reviews_arr = resp['results'].map(r => {
          var review = {movie_name: r["display_title"],
            link: r["link"], summary: r["summary_short"]}

          return review;
        })
        console.log("Reviews Arr")
        console.log(reviews_arr);
        reviews = reviews_arr;
      });
      console.log("Reviews")
      console.log(reviews)
      return reviews
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
