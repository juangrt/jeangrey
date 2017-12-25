import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"

class Blog extends React.Component {
  componentDidMount() {
    document.title = '1N Garzon | Blog';
  }

  render() {
    return (
      <div>
        <h1>Blog Page</h1>
      </div>
      )
  }
}


export default Blog;