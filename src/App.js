import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import './App.css';


class App extends Component {

  state = {
    pos_Y: 0,
    arrow_up: "hidden"
  }

  mouseWheelScroll = () => {
    this.setState({pos_Y: window.scrollY})
    if(this.state.pos_Y > 80){
      this.setState({arrow_up: 1})
    }else{
      this.setState({arrow_up: 0})
    }
  }
  arrowPress = () => {
    this.setState({arrow_up: 0})
  }
  render(){
  return (
    <div className="App" onWheel={this.mouseWheelScroll}>
      <Router>
        <div id="home-page" className="container">
          <div>
            <nav>
              <div className="nav-wrapper black">
                {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i */}
                  {/* className="material-icons">menu</i></a> */}
                <ul className="right hide-on-med-and-down">
                  <li><a href="#home-page">Home</a></li>
                  <li><a href="#about-page">About</a></li>
                  <li><a href="#portfolio-page">Portfolio</a></li>
                  <li><a href="#contact-form">Contact</a></li>
                </ul>
              </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
              <li><a href="#home-page">Home</a></li>
              <li><a href="#about-page">About</a></li>
              <li><a href="#portfolio-page">Portfolio</a></li>
              <li><a href="#contact-form">Contact</a></li>
            </ul>
          </div>
          <div onClick={this.arrowPress} style={{opacity: this.state.arrow_up}} className="fixed-action-btn">
            <a href="#home-page" className="btn-floating waves-effect btn-medium white"><i className="material-icons">arrow_upward</i></a>
          </div>
          
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <footer className="page-footer white">
            <div className="icons center-align"><a href="./PavelPanchukov_resume.pdf"><img width="35" alt="" src="./images/resume.png"/><div className="tooltip">RESUME<span className="tooltiptext">Click to download resume in PDF format</span></div></a></div>
          <div className="footer-copyright">
            <div className="container black-text">
            © 2019-2020 paul-panchukov.com All Rights Reserved 
            
                            
            </div>
          </div>
        </footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
