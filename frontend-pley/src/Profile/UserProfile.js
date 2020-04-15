import React, { Component } from 'react'
import logo from '../assets/logo.jpeg';
import styles from './UserProfile.module.css'

class UserProfile extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.review.id)
    }

    render () {
        let { title, description, restaurant_id, restaurant_name} = this.props.review

        return (
            <div>
                <div className={styles["box"]}>
                    <a href={`/business/${restaurant_id}`}><p>{restaurant_name}</p></a>
                    <p>title: {title}</p>
                    <p>Description: {description}</p>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>                    
            </div>    
        )
    }
}

export default UserProfile