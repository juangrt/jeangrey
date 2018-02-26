import React from "react";
import ReactDOM from "react-dom";

class NotFoundError extends React.Component {
  componentDidMount() {
    document.title = '1N Garzon | Page Not Found';
  }

  render() {
    return (
        <div id="error-page">
          <h3>404 page not found</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
        </div>
      )
  }
}

export default NotFoundError;