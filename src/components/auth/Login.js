import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()
    
    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data )
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.goBack()
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
  
  render() {
    console.log('render state Login', this.state)
    console.log('render errors', this.state.errors)
    console.log('login props', this.props)
    console.log('history', this.props.history)
    const { errors } = this.state
    return (
      <div className='mainFormWrapLogin'>
        <div className='formWrapper'>
          <form className='panelWrapper' onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <label>Email</label>
            <input
              name='email'
              placeholder='name@email.com'
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
            <br/>
            {!errors && 
            <p>Oops, something went wrong. please try again</p>}
            <button type='submit'>Login</button>
            <Link to="/register">
              <small>No account yet? Click here to register.</small>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Login