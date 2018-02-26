import React from "react";
import ReactDOM from "react-dom";

class Admin extends React.Component {
  componentDidMount() {
    document.title = '1N Garzon | Admin';
  }

  render() {
    return (
      <div id="admin-page">
        <h1>Hello Juan</h1>
      </div>
      )
  }
}

export default Admin;