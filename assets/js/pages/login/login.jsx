import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import Session from "../../helpers/session";
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '' , password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.session = new Session();
  }


  componentDidMount() {
    document.title = '1N Garzon | Login';
  }

  handleSubmit(event) {
    event.preventDefault();
    let success = (response) => {
      this.props.history.push(response.data.redirect_url);
    }

    let fail = (error) => {
      console.log(error);
    }

    this.session.login({email: this.state.email, password: this.state.password}).then(success, fail);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }

  render() {
    return (
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

export default Login;