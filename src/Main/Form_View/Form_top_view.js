import React, { useState } from 'react';
import { Container, Row, Col, Form,Media } from 'reactstrap';
import './Form_top_view.css'
import img from './../../Img/hotelroom.jpg'
var imgStyle = {
    maxWidth: "96px"
};

var mainImgStyle = {
    maxWidth:"100%"
};



const Form_top_view = () => {;
  return (
  <div className="top_view_container">
    <Form className="form_tv">
        <div className="border tv_sub_image">
            <Media className="sub_image" style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture"></Media>
              <Media className="sub_image" style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture"></Media>
              <Media className="sub_image" style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture"></Media>
              <Media className="sub_image" style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture"></Media>
              <Media className="sub_image" style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture"></Media>
        </div>
        <div className="border tv_main_image">
            <Media className="sub_image" style={mainImgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture">

            </Media>
        </div>
        <div className="border tv_info">
            <div>BRAND</div>
            <div>Room Book Here</div>
            <div>Add to Favorites</div>
            <div>Nist, do fames, consequat,</div>
            <div>Read More</div>
            <div className="price">
                <div className="origin-price">AED 32.00</div>
                <div>AED 25.60</div>
                <div className="sale-off">30% Off</div>
            </div>
            
        </div>
    </Form>
  </div>
  );
}

export default Form_top_view;