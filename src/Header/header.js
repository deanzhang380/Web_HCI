import React, { useState } from 'react';
import MenuBar from './Navbar/navbar.js';
import { Container, Row, Col } from 'reactstrap';
import Slider_Show from './Caurosel/caurosel.js'
import './header.css'
const Header = () => {;
  return (
    <Container className="App-Container">
      <Row>
        <Col>
        <MenuBar className="">
        </MenuBar>
        </Col>
        <Col  >
        <Slider_Show>
        </Slider_Show>
        </Col>
      </Row>
    </Container>
   
  );
}

export default Header;