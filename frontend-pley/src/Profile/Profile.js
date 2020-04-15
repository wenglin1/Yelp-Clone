import React, { Component } from 'react';
import UserProfile from './UserProfile.js';
import { NavBar } from '../NavBar/NavBar';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Profile(props) {
    
    console.log(props.reviews) 

    let arrayOfReviews = props.user.reviews.map((review) => {
        return <UserProfile key={review.id} review={review} handleDelete={props.handleDelete} />
    })

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
      <div>
        <div>
            <NavBar search={search} term={term} location={locationParam} onClick={props.handleClick}/> 
        </div>
        <div id="profile-card">
          <h1>{props.user.username}'s Profile</h1>
          <h3>Restaurant Reviews</h3>
            <ol>
              {arrayOfReviews}
            </ol>
        </div>
      </div>
    );
  
}

