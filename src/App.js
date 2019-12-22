import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'
import Header from './Header/header';
import Main from './Main/main.js'
function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Main></Main>
    </div>
  );
}

export default App;
