import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg';
import styles from './Login.module.css'

export class Login extends React.Component {

    state = {
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
    let {username, password} = this.state  
    return (
      <div className={styles["login"]}>
        <Link to='/'><img src={logo} className={styles["logo"]} alt='pleY logo'/></Link>
        <div>
          if you dont have an account : <a href="/register">register here</a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login Form</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
          </div> 
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
  )}
}
