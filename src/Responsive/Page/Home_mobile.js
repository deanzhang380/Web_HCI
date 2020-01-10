import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header_Mobile from './../Header/header'
import Form_Fast_Book from './../Form/form'
import Card_info from '../Card/card'
import Relative_Explore from './../Card/relate_explore'
import './Home_mobile.css'
const HomeMobile = () => {
  ;
  return (
    <div>
        <Header_Mobile></Header_Mobile>
        <Form_Fast_Book></Form_Fast_Book>
        <Relative_Explore></Relative_Explore>
        
        <div className="navbar_res">
            <div style={{width:"fit-content", margin:"0 auto"}}>
              <Button outline color="danger">Home</Button>
              <Button outline color="danger">Favorites</Button>
              <Button outline color="danger">Log-in</Button>
            </div>
        </div>

    </div>
  );
}

export default HomeMobile;