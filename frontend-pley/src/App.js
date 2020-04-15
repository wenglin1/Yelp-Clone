import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Search } from './Search/Search';
import { Register } from './Register/Register';
import { Login } from './Register/Login';
import { Profile } from './Profile/Profile';
import { RestaurantPage } from './Search/SearchResults/SearchResult/RestaurantPage/RestaurantPage';

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
      .then(r => {
        this.setState({
          user: r.user
          
        })
      })
    }
    
    fetch("http://localhost:3000/reviews")
      .then(r => r.json())
      .then(newArray => {
          this.setState({
              reviews: newArray
          })
      })
  }

  handleResponse = (response) => {
    if (response.user) {
      console.log(response)
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

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({
      token: " ",
      user: {
        id: 0,
        username: "",
        reviews: []
      }
    })
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
    return <Profile user={this.state.user} handleDelete={this.handleDelete} handleClick={this.handleLogout} reviews={this.state.reviews}/>
  }

  renderRestaurantPage = (routerProps) => {
    return <RestaurantPage {...routerProps} reviews={this.state.reviews} handleClick={this.handleLogout}/>
  }

  renderLandingPage = (routerProps) => {
    return <LandingPage {...routerProps} handleClick={this.handleLogout}/>
  }

  renderSearch = () => {
    return <Search handleClick={this.handleLogout}/>
  }
  render () {
    return (
    <Switch>
      <Route path='/search' render={this.renderSearch}/>
      <Route path='/register' render={this.renderRegister}/>
      <Route path='/login' render={this.renderLogin}/>
      <Route path='/profile' render={ this.renderProfile } />
      <Route path='/business/:id' render={this.renderRestaurantPage}/>
      <Route path='/' render={this.renderLandingPage}/>     
    </Switch>
  )};
}

export default withRouter(App);
