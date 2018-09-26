const MovieReviews = (props) => {
 render {
   const reviews = props.reviews.map(r => {
     return (
       <div class="review">
          <h3>Movie</h3>
          <p>{r.movie_name}</p>
          <h3>Brief Summary</h3>
          <p>{r.summary}</p>
          <p>View at <a target="_blank" href={r.link}>New York Times Website</a></p>
       </div>
     )
   })

   return (
     <div class="review-list">
      {reviews}
     </div>
   )
 } // render --ends
}

export default MovieReviews
