import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './../Header/header'
import Main from './../Main/main'
import Footer from './../Footer/footer'
const HomePage = () => {
  ;
  return (
    <Container className="App-Container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}

export default HomePage;