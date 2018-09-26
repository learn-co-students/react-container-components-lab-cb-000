import React from 'react';

const MovieReviews = (props) => {
  console.log("MovieReviews props:");
  console.log(props);
  // [{movie_name: "Latest Google", summary: "It's not actually a movie ...", link: 'https://www.google.com'}]
  const reviews = props.reviews.map(r => {
   return (
     <div className="review">
        <h3>Movie</h3>
        <p>{r.movie_name}</p>
        <h3>Brief Summary</h3>
        <p>{r.summary}</p>
        <p>View at <a target="_blank" href={r.link}>New York Times Website</a></p>
     </div>
   )
  })

  return (
   <div className="review-list">
    {reviews}
   </div>
  )
}

MovieReviews.defaultProps = {reviews:[{movie_name: "Latest Google", summary: "It's not actually a movie ...", link: 'https://www.google.com'}]};

export default MovieReviews
