import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './../Header/header'
import Main from './../Main/main'
import Footer from './../Footer/footer'
import { useMediaQuery } from 'react-responsive'
import HomeMobile from '../Responsive/Page/Home_mobile'


const HomePage = () => {
  ;
  return (
    <div>
          <Container className="App-Container">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </Container>
      
        
    </div>
  );
}

export default HomePage;