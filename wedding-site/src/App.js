import React, { Component } from 'react';
import './App.css';

//components
import LayoutNav from './components/LayoutNav';
import DonateModal from './components/DonateBtn';

class App extends Component {
  render() {
    return (
      <>
        <LayoutNav />
        <DonateModal />
      </>
      );
  }
}

export default App;
