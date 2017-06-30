import React, { Component } from 'react';
import '../static/css/pmp2.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>
        <div className="body">
          <ul className="nav navbar-nav">
            <li className="active">Home</li>
            <li>News</li>
            <li>Guides</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
