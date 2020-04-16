import React, { Component } from 'react';
import styles from "./NewReview.module.css"

class NewReview extends Component {

  state = {
    description: "",
    title: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
      fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          restaurant_id: this.props.restaurantId,
          restaurant_name: this.props.businessName
        })
      })
      .then(r => r.json())
      .then(r => {
          console.log(r)
          this.props.addReview(r)
        })    
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    let {title, description} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <strong><p className={styles["text"]}>New Review</p></strong>
        <div>
            <label htmlFor="title">Title: </label>
            <input type="integer" autoComplete="off" name="title" value={title} onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor="description">Description: </label>
            <input rows="2" className={styles["text-box"]} type="text" autoComplete="off" name="description" value={description} onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default NewReview;