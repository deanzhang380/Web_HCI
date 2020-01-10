import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './main.css'
import Card_info from './Card/card.js'
import RecomBar from './Recommend_Bar/recommend_bar.js'
import Form_top_view from './Form_View/Form_top_view.js'
import Footer from './../Footer/footer'
import Gallery from './../Custom_carousel/gallery'
import Form_book from './Form_Book_info/form_book'
import TopSellers from './Top_Seller/topsell'
import Reviews from './../Main/Reviews/reviews'
const Main = () => {
  ;
  return (
    <Container className="App-Container">
      <div style={{ width: "95%", margin: "0px auto" }}>
        <RecomBar></RecomBar>
      </div>
      <div>
        <div className="size30 font-weight ">TOP VIEW</div>
        <Form_top_view></Form_top_view>
      </div>
      <div style={{ width: "95%", margin: "0px auto" }}>
        <TopSellers></TopSellers>
        <TopSellers></TopSellers>
      </div>
      <div>

      </div>
    </Container>
  );
}

export default Main;