import React, { useState } from 'react';
import { Container, Row, Col, Form,Media, Button } from 'reactstrap';
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
        <div className=" tv_sub_image">
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
        <div className=" tv_main_image">
            <Media className="sub_image" style={mainImgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture">

            </Media>
        </div>
        <div className=" tv_info">
            <div className="txt_left font-weight">BRAND</div>
            <div className="txt_left size30 font-weight">Room Book Here</div>
            <div className="txt_left font-weight size18">Add to Favorites</div>
            <div className="txt_left font-weight size18">Nist, do fames, consequat,</div>
            <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div>
            
            <div className="tv_price">
            <div className="price margin_top_auto">
                <div className="origin-price">AED 32.00</div>
                <div className="size18">AED 25.60</div>
                <div className="sale-off"><div>30% Off</div></div>
               
            </div>
            </div>
            <div className="txt_left font-weight size14">You can track the price of this product</div>
            <div className="txt_left margin_top_bottom">
              <Button className="btn_top_view">SHARE NOW</Button>
              <Button className="btn_top_view">BOOK NOW </Button>
            </div>
            <div className="view_my_favourite_list txt_left margin_top_bottom">
                <a href="#" className="font-weight text_underline size18 color_black"> View My Favourite List</a>
            </div>
            <div className="favorite_list_group txt_left">
            <div>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
            </div>
            <div>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
              <Button className="btn_group">Lorem </Button>
            </div>  
            </div>
        </div>
    </Form>
  </div>
  );
}

export default Form_top_view;