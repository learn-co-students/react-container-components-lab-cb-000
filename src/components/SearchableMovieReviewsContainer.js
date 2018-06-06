// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6329402312c04b4a8397df38d2df7c18';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query={this.state.searchTerm}`;


export default class SearchableMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
   fetch(URL)
     .then(response => response.json())
     .then((reviews => this.setState({reviews})))
 }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
