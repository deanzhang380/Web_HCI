import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css'
import Card_info from './Card/card.js'
import RecomBar from './Recommend_Bar/recommend_bar.js'
import Form_top_view from './Form_View/Form_top_view.js'
import Footer from './../Footer/footer'
import Gallery from './../Custom_carousel/gallery'
import Form_book from './Form_Book_info/form_book'
const Main = () => {;
  return (
    <Container className="App-Container">
        <div className="">
        <RecomBar></RecomBar>
        </div>
         <div>
           <Footer></Footer>
         </div>
         <div>
           <Form_book>
             
           </Form_book>
         </div>

    </Container>
  );
}

export default Main;