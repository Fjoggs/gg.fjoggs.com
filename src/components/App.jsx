import React, { Component } from 'react';
import '../static/css/pmp2.css';
import Home from './Home.jsx';
import News from './News.jsx';
import Guides from './Guides.jsx';
import Downloads from './Downloads.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.navigation.bind(this);

    this.state = {
      currentActive: 'home',
      home: 'active',
      news: '',
      guides: '',
      downloads: '',
      showHome: true,
      showNews: false,
      showGuides: false,
      showDownloads: false,
    };
  }
  
  navigation (event) {
    this.setActiveElement(event);
  }

  setActiveElement (event) {
    const target = event.target.id;
    const renderComponent = 'show' + target.charAt(0).toUpperCase() + target.slice(1);
    const currentActive = this.state.currentActive;
    const currentComponent = 'show' + currentActive.charAt(0).toUpperCase() + currentActive.slice(1);
    if (target !== currentActive) {
      this.setState({
        [target]: 'active',
        [currentActive]: '',
        currentActive: target,
        [renderComponent]: true,
        [currentComponent]: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="header"></div>
        <div className="body">
          <div className="navbar">
            <ul className="nav">
              <li onClick={this.navigation} id="home" 
                className={this.state.home}>Home</li>
              <li onClick={this.navigation} id="news" 
                className={this.state.news}>News</li>
              <li onClick={this.navigation} id="guides" 
                className={this.state.guides}>Guides</li>
              <li onClick={this.navigation} id="downloads" 
                className={this.state.downloads}>Downloads</li>
            </ul>
          </div>
        </div>
        <div className="container">
          {this.state.showHome ? <Home /> : null}          
          {this.state.showNews ? <News /> : null}
          {this.state.showGuides ? <Guides /> : null}
          {this.state.showDownloads ? <Downloads /> : null}
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
