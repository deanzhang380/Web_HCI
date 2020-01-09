import React, { useState } from 'react';
import { Container, Row, Col,Media,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./footer.css"
import img from './logo_dai.jpg'
import logo1 from './../Img/facebook_icon.png'
import cdc_logo from './../Img/CreditCardLogos.jpg'
var imgStyle = {
    minWidth: "100%",
    maxWidth: "180px"
  };
  var logoStyle = {
    minWidth: "20px",
    maxWidth: "180px",
    margin:"0 30px 0 0"
  };
  var footer_column_style={

  }
  var footer_text_header={
    "color":"black",
    "font-size":"20px",
    "font-weight":"600"
  }
  var footer_text_content={
    "color":"black",
    "font-size":"14px", "margin-top":"15px"
  }


const Footer = (propos) => {;
  return (
    <div className="footer">
        <div className="back_ground_color_247 height_5"></div>
        <div className="back_ground_color_232 height_80">
            <Row className="Row_height">
                <Col sm="12" md={{ size: 10, offset: 1 }} className="display_flex">
                <Col xs="2">
                <Media style={imgStyle}
              object
              src={img}
              alt="My PlaceHolder Picture">
              
        </Media>
        <div className="div_logo_footer">
        <Media style={logoStyle}
              object
              src={logo1}
              alt="My PlaceHolder Picture">
        </Media>
        <Media style={logoStyle}
              object
              src={logo1}
              alt="My PlaceHolder Picture">
        </Media>
        <Media style={logoStyle}
              object
              src={logo1}
              alt="My PlaceHolder Picture">
        </Media>
        </div>
                </Col>
                <Col xs="2">
                    <div style={footer_text_header}>
                        MAIN PAGES
                    </div>
                    <div style={{"display":"grid"}}>
                       <a href="#" style={footer_text_content}>
                           Sell with us
                       </a>
                       <a href="#" style={footer_text_content}>
                          About us
                       </a>
                       <a href="#" style={footer_text_content}>
                         Contact us
                       </a>
                       <a href="#" style={footer_text_content}>
                           Products
                       </a>
                       <a href="#" style={footer_text_content}>
                           Become an Administrator
                       </a>
                    </div>
                </Col>
                <Col xs="2">
                <div style={footer_text_header}>
                        POLICY
                    </div>
                    <div style={{"display":"grid"}}>
                       <a href="#" style={footer_text_content}>
                           Terms of usage
                       </a>
                       <a href="#" style={footer_text_content}>
                          Privacy Policy
                       </a>
                       <a href="#" style={footer_text_content}>
                         Return Policy
                       </a>
                    </div>
                </Col>
                <Col xs="2">
                <div style={footer_text_header}>
                        CATEGORIES
                    </div>
                    <div style={{"display":"grid"}}>
                       <a href="#" style={footer_text_content}>
                           Skin Care
                       </a>
                       <a href="#" style={footer_text_content}>
                          Make Up
                       </a>
                       <a href="#" style={footer_text_content}>
                         Hair Care
                       </a>
                       <a href="#" style={footer_text_content}>
                         Bath & Body
                       </a>
                       <a href="#" style={footer_text_content}>
                         Beauty Suppliments
                       </a>
                    </div>
                </Col>
                <Col xs="4" style={{"textAlign":"left"}}>
                <div style={footer_text_header}>
                        SUBSCRIBE
                </div>
                <div style={footer_text_content}>
                <a href="#" style={footer_text_content}>
                        Subscribe to our newsletter, so that you can be the first to know about new offers and promotions
                 </a>
                </div>
                <div style={footer_text_content}>
                    <InputGroup>
                     <Input placeholder="Enter Email Address" />
                        <InputGroupAddon addonType="append" >
                        <InputGroupText style={{"color":"black","font-size":"15px","font-weight":"600"}}>SUBSCRIBE</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                </Col>
                </Col>
            </Row>
        </div>
        <div className="back_ground_color_255 height_15" style={{display:"flex"}}>
        <div style={{"margin-top":"10px", textAlign:"center",width:"max-content",margin:"10px 400px 0px 300px"}}>
                @2018 All Right Reversed
            </div>
            <div style={{"margin-top":"10px", textAlign:"center",width:"max-content",margin:"10px 0px 0px 500px"}}>
            <Media style={logoStyle}
              object
              src={cdc_logo}
              alt="My PlaceHolder Picture">
            </Media>
            </div>
        </div>
    </div>
  );
}

export default Footer;