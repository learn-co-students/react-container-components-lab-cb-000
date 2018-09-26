const MovieReviews (props) => {
 render {
   const reviews = props.reviews.map(review => {
     return (
       <div class="review">
       //TODO: Review info <p></p>
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
