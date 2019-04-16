import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';
import { Auth } from '../services/AuthService';
import Login from '../components/Login/Login';

class App extends Component {

  
  render() {
    
    return Auth.isLoggedIn() ? (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ) : (
      <>
        <Login />
      </>
    )
  }
}

export default App;
