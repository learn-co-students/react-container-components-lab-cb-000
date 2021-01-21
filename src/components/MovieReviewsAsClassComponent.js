import React from 'react';

// The curriculum didn't really go over the differences between function components and class components... I learned only today that in the function component version, the reviews array prop is actually wrapped in an eponymous object even though it appears to be passed directly as an array (I don't recall this being made clear in the curriculum). The reviews argument in the function component must be destructured down to the array like ({reviews}), or alternately, the prop drilled into with a double-call (i.e., reviews.reviews.map... ). Almost all the lessons and labs treated the components as classes, so the "this.props.reviews.map..." used below is rote, but the array-nested-in-object was a surprise. 

class MovieReviews extends React.Component {
  render() {
    return (
      <div className="review-list">
      { this.props.reviews.map(review => {
        return (
          <div className='review'>
            <h2>{ review.display_title }</h2>
            <h3>{ review.headline }</h3>
            <p>{ review.summary_short }</p>
          </div>
        )
      })
      }
    </div>
    )
  }
}

MovieReviews.defaultProps = { reviewsArray: [] }

export default MovieReviews;