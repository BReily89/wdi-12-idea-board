import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  state = {
    users: []
  }
  componentWillMount (){
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users').then(res => {
      this.setState({users: res.data})
    })
  }
  
  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.users.map(user => {
          return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
        })}
      </div>
    )
  }
}

export default LoginPage