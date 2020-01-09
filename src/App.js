import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'
import Header from './Header/header';
import Main from './Main/main.js'
import Footer from './Footer/footer'
function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
