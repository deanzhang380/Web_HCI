import React, { useState } from 'react';
import { Container, Row, Col,Media } from 'reactstrap';
// import ResponsiveMenu from 'react-responsive-navbar';
// const ResponsiveMenu = require('react-responsive-navbar');
import img1 from "./../../Img/img1.jpg";
var imgStyle = {
    minWidth: "100%",
    maxWidth: "128px"
  };
const Header_Mobile = () => {
  ;
  return (
    <div>
         <Media
              style={imgStyle}
              object
              src={img1}
              alt="My PlaceHolder Picture">
          </Media>
          {/* <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      /> */}
    </div>
  );
}

export default Header_Mobile;