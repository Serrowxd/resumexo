import React, { Component } from 'react';

import './App.css';

// Imports
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Filler from './components/Filler';
import LowerHead from './components/LowerHeader/LowerHeader';
import UpperBody from './components/UpperBody/UpperBody';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="containerDiv">
          <NavBar />
          <Header />
        </div>
        <div className="lowerHeadDiv">
          <LowerHead />
        </div>
        <div className="upperBodyDiv">
          <UpperBody />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
