import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />

      </>
    );
  }
}

export default App;
