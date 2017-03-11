import React, { Component } from 'react';
import logo from './logo.svg';
import PageSection from './components/PageSection/PageSection';
import Box from './components/FXBox/Box';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CatalogServiceSlider from './components/CatalogServiceSlider/CatalogServiceSlider';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <PageSection col>
            <header>
              <Box middle center style={{ height: 50, backgroundColor: 'white'}} />
            </header>
            <Box flexed col style={{ backgroundColor: '#ebebeb' }}>
              <Box flexed center bottom style={{ fontSize: 28, padding: 8, color: "#bdbdbd" }}>
                Some dummy text that we need to display.
              </Box>
              <Box flexed center style={{ padding: 8 }}>
                <Box center middle style={{ height: 35, width: 150, backgroundColor: '#bdbdbd', color: '#f1f1f1' }}>
                  dummy button
                </Box>
              </Box>
            </Box>
          </PageSection>
          <PageSection col>
            <Box flexed center middle style={{ backgroundColor: '#F0F0F0', color: '#bdbdbd', fontSize: 28 }}>
              This can be a useful title.
            </Box>
            <CatalogServiceSlider />
            <Box flexed center middle style={{ backgroundColor: 'white' }}>
              possible tech stack or clients list
            </Box>
          </PageSection>
        </div>
    );
  }
}

export default App;
