import React from 'react';
import {
  Card, CardText,CardLink,
  CardTitle, CardSubtitle,Button,Media
} from 'reactstrap';
import img from './room_1.jpg' 
import './card.css'
var imgStyle = {
  minWidth: "318px",
  maxWidth: "180px"
};

const Card_info = (props) => {
  return (
    <div className ="outside_card">
        <Media style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture">
        </Media>
        <div className="card_Title"> Card Title</div>
        <div className="card_sub_Title"> Brand</div>
        <div className="price">
          <div className="origin-price">AED 32.00</div>
          <div>AED 25.60</div>
          <div className="sale-off">30% Off</div>
        </div>
    </div>
  );
};

export default Card_info;