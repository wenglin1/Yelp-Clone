import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg';
import styles from './UserProfile.module.css'

class UserProfile extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.review.id)
    }

    render () {

        let { title, description, restaurant} = this.props.review

        return (
            <div>                
                <div className="review-card">
                    <div className="card_content">
                        <div className="card_detail">
                            <p>title: {title}</p>
                            <p>Description: {description}</p>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>                    
                    </div>    
                </div>
            </div>
        )
    }
}

export default UserProfile