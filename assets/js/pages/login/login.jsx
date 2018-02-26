import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state, props) => 
  ({
    user: state.user
  })

const mapDispatchToProps = dispatch => 
  ({
    onLogin({email, password}) {
      return dispatch(login(email, password))
    }
  })

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onLogin = props.onLogin;
    this.state = {email: '' , password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    document.title = '1N Garzon | Login'
  }

  handleSubmit(event) {
    event.preventDefault()
    this.onLogin({email: this.state.email, password: this.state.password}).then( response => {
      this.props.history.push(response.data.redirect_url)
    })
  }

  handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({[name]: value})
  }

  render() {
    return (
      this.props.user ? <Redirect to={{pathname: '/admin', state: { from: this.props.location }}}/> :
      <div id="login-page">
        <h1>Login to Your Account</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input id="email" type="text" onChange={this.handleChange} name="email"
              value={this.state.email} className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handleChange} name="password"
            value={this.state.password} className="form-control" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
      )
  }
}


Login.propTypes = {
    onLogin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 