import React, { useState } from 'react';
import { Container, Row, Col,Media } from 'reactstrap';
import "./footer.css"
import img from './logo_dai.jpg'
var imgStyle = {
    minWidth: "100%",
    maxWidth: "180px"
  };

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
              <div>
                  
              </div>
        </Media>
                </Col>
                <Col xs="2">.col-3</Col>
                <Col xs="2">.col-3</Col>
                <Col xs="2">.col-3</Col>
                <Col xs="4">.col-3</Col>
                </Col>
            </Row>
        </div>
        <div className="back_ground_color_255 height_15"></div>
    </div>
  );
}

export default Footer;