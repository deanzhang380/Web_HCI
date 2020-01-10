import React, { useState } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

import Card_info from './card'
const Relative_Explore = () => {
  ;
  return (
    <div>
        <div className="size30 font-weight">Relate Explore</div>
        <div style={{display:"flex", margin:"10px 0"}}>
        <Card_info></Card_info>
        <Card_info></Card_info>
        </div>
        <div style={{display:"flex",margin:"10px 0"}}>
        <Card_info></Card_info>
        <Card_info></Card_info>
        </div>
        <div style={{width:"100%", textAlign:"center"}}>
       <Button className="btn_view_all" > View All</Button>
      </div>
    </div>
  );
}

export default Relative_Explore ;