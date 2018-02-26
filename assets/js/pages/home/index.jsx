import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  componentDidMount() {
    document.title = '1N Garzon | Home Page';
  }

  render() {
    return (
      <div id="home-page">
        <div className="jumbotron">
          <blockquote className="container text-center">
            "Life is too short to not go where your heart leads"
            <footer className="blockquote-footer">
              <cite title="Alex Elle">Alex Elle</cite>
            </footer>
          </blockquote>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor eros ut metus varius, quis mollis eros convallis. Nullam non ipsum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu egestas augue, non commodo nisl. Mauris a ullamcorper tellus. Duis accumsan lacus lectus, a pellentesque lectus ullamcorper tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent blandit eu odio mollis placerat. Aenean pharetra dictum justo, non viverra neque cursus at.
            </div>
            <div className="col-sm-3">
                Maecenas ac aliquet nibh. In et luctus urna. Sed congue sagittis tellus. In mi lacus, rhoncus non nisi non, tempor tempor massa. Suspendisse porta mauris velit, sed pulvinar purus auctor sit amet. Morbi aliquam risus felis, at tincidunt tellus fermentum non. Etiam volutpat mauris nec odio commodo accumsan. Sed id eros vitae lacus condimentum dignissim nec nec odio.
            </div>
            <div className="col-sm-3">
              Nam fermentum lacus et congue finibus. Suspendisse viverra, mauris tristique varius condimentum, lectus sapien finibus urna, id convallis tellus mauris non nulla. Pellentesque porttitor lacus magna, quis pulvinar lorem mattis eget. Ut feugiat, diam vel lacinia pulvinar, est elit consectetur eros, vel rhoncus eros neque sit amet arcu. Nulla dui libero, posuere quis ligula vel, tincidunt placerat orci. Vestibulum ligula risus, laoreet varius massa blandit, dictum rhoncus libero. Morbi vitae hendrerit est. Phasellus mollis, elit vitae viverra ultricies, libero quam tempus nulla, et ullamcorper sem tortor vel est. In metus sapien, suscipit eget velit ut, dignissim mattis nisi. Quisque et mauris ut metus interdum vestibulum eget et turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam velit mi, fermentum vel placerat eu, lacinia a ante. Fusce felis ex, hendrerit ac lorem a, convallis molestie odio.
            </div>
            <div className="col-sm-3 social-preview">
              Social Preview
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Home;