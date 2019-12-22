import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css'
import Card_info from './Card/card.js'
import RecomBar from './Recommend_Bar/recommend_bar.js'
const Main = () => {;
  return (
    <Container className="App-Container">
        <div className="">
        <RecomBar></RecomBar>
        </div>
         

    </Container>
  );
}

export default Main;