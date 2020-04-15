import React from "react";

import Review from "./Review/Review";
import NewReview from "./NewReview/NewReview";


const Reviews = (props) => {

  console.log(props)  
  let arrayOfReviews = props.reviews.map((reviewOBJ) => {
    return <Review key={reviewOBJ.id} review={reviewOBJ}/>
  })
  
  return (
    <div id="review">
        <div>{arrayOfReviews}</div>        
    </div>
    
  ) 
}

export default Reviews;
