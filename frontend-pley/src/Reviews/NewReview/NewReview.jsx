import React, { Component } from 'react';

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
          restaurant_id: this.props.restaurantId
        })
      })
      .then(r => r.json())
      .then(r => {
          console.log(r)
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
        <h1>New Review</h1>
        <label htmlFor="title">Title:</label>
        <input type="integer" autoComplete="off" name="title" value={title} onChange={this.handleChange}/>
        <label htmlFor="description">Description:</label>
        <input type="text" autoComplete="off" name="description" value={description} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default NewReview;