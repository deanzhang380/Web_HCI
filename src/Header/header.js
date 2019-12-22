import React, { useState } from 'react';
import MenuBar from './Navbar/navbar.js';
import Tagbar from './TagBar/tagbar.js'
import Form_fast_book from './Form_fast_book/form'
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
      </Row>
      <Row>
      <Col  >
        <Slider_Show className="div_relative">
        </Slider_Show>
        {/* <Form_fast_book className="div_absolute">
          </Form_fast_book> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Tagbar></Tagbar>
        </Col>
      </Row>
      
    </Container>
   
  );
}

export default Header;