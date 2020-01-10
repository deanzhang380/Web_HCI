import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './../Header/header'
import Main from './../Main/main'
import Footer from './../Footer/footer'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
 
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

const HomePage = () => {
  ;
  return (
    <div>
      <Desktop>
          <Container className="App-Container">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </Container>
      </Desktop>
        <Mobile>
            <div>This is mobile Responsive.</div>
        </Mobile>
    </div>
  );
}

export default HomePage;