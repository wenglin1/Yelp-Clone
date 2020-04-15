import React from "react";
import Review from "./Review/Review";

const Reviews = (props) => {
 
  let arrayOfReviews = props.reviews.map((reviewOBJ) => {
    return <Review key={reviewOBJ.id} review={reviewOBJ}/>
  });
  
  return (
    <div id="review">
        <div>{arrayOfReviews}</div>        
    </div> 
  ) 
  
}

export default Reviews;
