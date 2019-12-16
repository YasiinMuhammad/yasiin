import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Resume' component={Resume} />
          <Route path='/About' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
        </div>
  
      </Router>
    );
  }
}

export default App;