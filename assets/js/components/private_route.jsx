import React from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state, props) => 
  ({
    user: state.user
  })


class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.handleRender = this.handleRender.bind(this);
  }

  handleRender() {
    if(this.props.user) {
      const Component = this.props.component
      return <Component {...this.props}/>
    }
    return <Redirect to={{pathname: '/login', state: { from: this.props.location }}}/>
  }

  render() { return this.handleRender() }

}

export default connect(mapStateToProps)(PrivateRoute)