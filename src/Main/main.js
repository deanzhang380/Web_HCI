import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css'
import Card_info from './Card/card.js'
const Main = () => {;
  return (
    <Container className="App-Container">
      <Row>
        <Card_info></Card_info>
      </Row>  
    </Container>
  );
}

export default Main;