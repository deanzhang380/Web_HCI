import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './recommend_bar.css'
import Card from './../Card/card.js'
import Gallery from './../../Custom_carousel/gallery'
const RecomBar = () => {;
  return (
      <div className="recombar_contrainer">
        <div className="link_Recommend"> 
            <a className="A_tag_Recommend">
                Recommend for you
            </a>
        </div>
        <Gallery ></Gallery>
      </div>
  );
}

export default RecomBar;