import React, { Component } from 'react';
import styles from "./Review.module.css"

class Review extends Component {

    render () {

        let {title, description} = this.props.review

        return (
            <div className={styles["box"]}>
                <p>User: {this.props.review.user.username}</p>
                <p>Title: {title}</p>
                <p>Description: {description}</p> 
            </div>
        )
    }
}

export default Review