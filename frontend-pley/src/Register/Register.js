import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import styles from './Register.module.css';

export class Register extends Component {
  
  state = {
    name: "",
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password, name} = this.state

    return (
      <div>
        <Link to='/'><img src={logo} className={styles.logo} alt='pleY logo'/></Link>
        <div>
          if you already have an account : <a href="/login">Login</a>
        </div>
      
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="name">name:</label>
          <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
          <label htmlFor="username">username:</label>
          <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
          <label htmlFor="password">password:</label>
          <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}