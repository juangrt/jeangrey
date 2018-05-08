import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import history from './services/history'
import axiosInstance from './services/axios_instance'

import AppHeader from './components/header'
import AppFooter from './components/footer'
import PrivateRoute from './components/private_route'

import Admin from './pages/admin'
import Home from './pages/home'
import Blog from './pages/blog'
import CreatePost from './pages/blog/create'
import Login from './pages/login/login'
import NotFoundError from './pages/error'

const mapStateToProps = (state, props) => 
  ({
    errors: state.errors
  })

class Routes extends React.Component {

  constructor(props) {
    super(props)
    this.renderErrors = this.renderErrors.bind(this)
    axiosInstance.get('/api/v1/auth')
  }

  renderErrors() {
    const errors = this.props.errors
    const keys = Object.keys(this.props.errors)

    const errorList = keys.map( key => {
      return <li>{errors[key].message}</li>
    })

    return (
      keys.length == 0 ? null :
      <div className='container' style={{top: '70px', left: '50%', marginLeft: '-570px', position: 'absolute'}}>
        <div className="alert alert-danger" role="alert">
          <ul>{errorList}</ul>
        </div>
      </div>
      )
  }


  render() { 
    return (
    <Router history={history}>
      <div>
        <AppHeader></AppHeader>
        {  this.renderErrors() }
  
        <main role='main' className='container'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/blog' component={Blog}/>
            <PrivateRoute exact path='/blog/new' component={CreatePost}/>
            <PrivateRoute exact path='/admin' component={Admin}/>
            <Route exact path='/404' component={NotFoundError} />
            <Redirect from='*' to='/404' />
          </Switch>
        </main>
        <AppFooter></AppFooter>
      </div>
    </Router>
  )}
}

Routes.propTypes = {
    errors: PropTypes.object
}

export default connect(mapStateToProps, null)(Routes)