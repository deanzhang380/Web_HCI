import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Card from './../Card/card.js'
import Gallery from './../../Custom_carousel/gallery'
const TopSellers = () => {;
  return (
      <div style={{width:"80%", margin:"100px auto"}}>
        <div style={{display:"flex"}} > 
           <div className="size30 font-weight" style={{marginLeft:"90px"}}>TOP SELLERs</div> 
           <a href="#" className=" btn-seeall" style={{margin:"5px 0 0 90px",textDecoration:"underline"}}> See All</a>
        </div>
        <Gallery></Gallery>
      </div>
  );
}

export default TopSellers;