import React, { Component } from 'react';
import UserProfile from './UserProfile.js';
import { NavBar } from '../NavBar/NavBar';
export default class Profile extends Component {

  render() {
    
    let {username, reviews} = this.props.user

    let arrayOfReviews = reviews.map((review) => {
        return <UserProfile key={review.id} review={review} handleDelete={this.props.handleDelete} />
    })

    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div id="profile-card">
          <h1>{username}'s Profile</h1>
          <h3>Restaurant Reviews</h3>
            <ol>
              {arrayOfReviews}
            </ol>
        </div>
      </div>
    );
  }
}

