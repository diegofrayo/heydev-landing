import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import PageSection from './components/PageSection/PageSection';
import Box from './components/FXBox/Box';
import OurServicesPage from './containers/ourServices/OurServicesPage';
import HomePage from './containers/Home/HomePage';
import OurProfile from './containers/OurProfile/OurProfile';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Box middle center style={{ position: 'fixed', width: '100%', height: 50, backgroundColor: 'white'}} >
                <Link to="/">Home</Link>
                <Link to="/services"> &nbsp;|&nbsp;services</Link>
                <Link to="/profile">&nbsp;|&nbsp; profile</Link>
            </Box>
            <Route exact path="/" component={HomePage} />
            <Route path="/services" component={OurServicesPage} />
            <Route path="/profile" component={OurProfile} />
        </div>
    );
  }
}

export default App;
