import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Buy from './components/buy'
import Home from './components/home'

class App extends Component {
  render() {
    return (
    <Router>
      <p><Link className='Link' to="/">b.s.Co</Link> &nbsp;&nbsp;&nbsp; <Link className='Link' to="/order">ORDER A BOTTLE OF BALL</Link></p>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/order" component={Buy} />  
     </div>
     </Router> 
        
        
    );
  }
}

export default App;
