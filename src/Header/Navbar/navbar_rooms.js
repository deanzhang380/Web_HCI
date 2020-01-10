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

import { Container, Row, Col,Input } from "reactstrap";

import "./navbar.css";
import Profile from "./../../General/User/Profile/profile";
import { Media } from "reactstrap";
import Logo_img from "./../../Img/logo_navbar.jpg";
var imgStyle = {
    minWidth: "100%",
    maxWidth: "135%", "background-color": "rgb(247,247,247)",
};

var text_left = {
  "text-align": "left"
}


var flag = 1;
const MenuBar_Rooms = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Row color="light" light expand="md" className="nb">
            <Col lg="6" style={{display:"flex"}}>
                <Col lg="2"  >
                    <Media style={imgStyle}
                        object
                        src={Logo_img}></Media>
                </Col>
                <Col lg="10">
                    <Input
                        className="Searching"
                        type="textarea"
                        placeholder="Searching"
                        rows={1}
                        required
                        maxlength="64"
                        height="100"
                    />
                </Col>
                </Col>
               
                <Col lg="6">
                    <Navbar className="font-style float-right" light expand="md">
                        <Nav className="mr-auto" navbar>
                            <NavLink href="">Home</NavLink>
                            <NavItem>
                                <NavLink href="">Booking</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Help</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Sign-up</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Log-in
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={() => window.location.href = '/profile'}>Profile</DropdownItem>
                                    <DropdownItem>Account</DropdownItem>
                                    <DropdownItem onClick={() => window.location.href = '/schedure'}>Your Schedure</DropdownItem>
                                    <DropdownItem>Your Booking</DropdownItem>
                                    <DropdownItem>Favorite List</DropdownItem>
                                    <DropdownItem>Payment List</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
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
            </Row>
  );
};

export default MenuBar_Rooms;
