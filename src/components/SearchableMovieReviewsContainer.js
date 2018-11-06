import React, { Component } from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import MovieReviews from './MovieReviews';


export default class SearchableMovieReviewsContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	render(){
		return (
			<div className = "searchable-movie-reviews">
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}
