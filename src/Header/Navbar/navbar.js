import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Container, Row, Col } from "reactstrap";

import "./navbar.css";
import Profile from "./../../General/User/Profile/profile";
import { Media } from "reactstrap";
import Logo_img from "./../../Img/logo_navbar.jpg";

var imgStyle = {
  minWidth: "53%",
  maxWidth: "20%", "background-color": "rgb(247,247,247)",
};
var text_left = {
  "text-align": "left"
}
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     // document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     //document.getElementById("logo").style.fontSize = "35px";
//   }
// }

var flag = 1;
const MenuBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Row color="light" light expand="md" className="nb" >
      <Col lg="3" style={text_left}>
        <a href="/home">
          <Media>
            <Media left>
              <Media
                style={imgStyle}
                object
                src={Logo_img}
                alt="My PlaceHolder Picture"
              />
            </Media>
          </Media>
        </a>
      </Col>
      <Col lg="9">
        <Navbar className="font-style float-right" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavLink href="/home" style={{ color: "black", fontWeight: "400" }}>Home</NavLink>
            <NavItem>
              <NavLink href="" style={{ color: "black", fontWeight: "400" }}>Booking</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" style={{ color: "black", fontWeight: "400" }}>Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" style={{ color: "black", fontWeight: "400" }}>Sign-up</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "black", fontWeight: "400" }}>
                Log-in
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => window.location.href = '/home/profile'}>Profile</DropdownItem>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem onClick={() => window.location.href = '/home/schedure'}>Your Schedure</DropdownItem>
                <DropdownItem>Your Booking</DropdownItem>
                <DropdownItem>Favorite List</DropdownItem>
                <DropdownItem>Payment List</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "black", fontWeight: "400" }}>
                Language
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Vietnamese</DropdownItem>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Chinese</DropdownItem>
                <DropdownItem>German</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Default</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Col>
    </Row >
  );
};

export default MenuBar;
