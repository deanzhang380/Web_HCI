import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css'
import Card_info from './Card/card.js'
import RecomBar from './Recommend_Bar/recommend_bar.js'
import Form_top_view from './Form_View/Form_top_view.js'
import Footer from './../Footer/footer'
const Main = () => {;
  return (
    <Container className="App-Container">
        <div className="">
        <RecomBar></RecomBar>
        </div>
         <div>
           <Form_top_view>
           </Form_top_view>
           <Footer></Footer>
         </div>

    </Container>
  );
}

export default Main;