import React, { Component } from 'react';
import './App.css';

//components
import LayoutNav from './components/LayoutNav';
// import DonateBtn from './components/DonateBtn';

class App extends Component {
  render() {
    return (
      <>
        <LayoutNav />
        {/* <DonateBtn /> */}
      </>
      );
  }
}

export default App;
