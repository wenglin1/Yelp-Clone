import React, { Component } from 'react'

class Review extends Component {

    render () {

        let {title, description} = this.props.review

        return (
            <div className="review-card">
                <div className="card_content">
                    <div className="card_detail">
                        <p>{this.props.review.user.username}</p>
                        <p>Title: {title}</p>
                        <p>Description: {description}</p>
                    </div>                    
                </div>    
            </div>
        )
    }
}

export default Review