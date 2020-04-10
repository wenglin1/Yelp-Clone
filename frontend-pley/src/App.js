import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Search } from './Search/Search';
import { Register } from './Register/Register';
import { Login } from './Register/Login';
import Profile from './Profile/Profile';

class App extends React.Component {

  state = {
    user: {
      id: 0,
      username: "",
      reviews: []
    },
    reviews: [],
    token: ""
  }

  componentDidMount = () => {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
  }

  handleResponse = (response) => {
    if (response.user) {
      localStorage.token = response.token
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  };

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }
  
  handleDelete = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.reviews.filter(review => {
        return review.id !== id
      })
      this.setState({
        reviews: filteredArray,
      },
      this.props.history.push("/profile"))      
    })
  }

  renderLogin = () => {
    return <Login handleSubmit={this.handleLogin}/>
  }

  renderRegister = () => {
    return <Register handleSubmit={this.handleRegister}/>
  }

  renderProfile = () => {
    return <Profile user={this.state.user} handleDelete={this.handleDelete}/>
  }

  
  render () {
    return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/register' render={this.renderRegister}/>
      <Route path='/login' render={this.renderLogin}/>
      <Route path="/profile" render={ this.renderProfile } />
      <Route path='/' component={LandingPage}/>     
    </Switch>
  )};
}

export default withRouter(App);
