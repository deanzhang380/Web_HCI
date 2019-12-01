import React, { useState } from 'react';
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
  DropdownItem,
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';

import './navbar.css'
import { Media } from 'reactstrap';
import Logo_img from './../../Img/logo.png'

var imgStyle = {
  minWidth: "128px", maxWidth: "128px"
};

var flag=1;
const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    
    <Row color="light" light expand="md">
      <Col lg="3">
        <Media>
          <Media left>
            <Media style={imgStyle} object src={Logo_img} alt="My PlaceHolder Picture" />
          </Media>
        </Media>
      </Col>
      <Col lg="9">
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
            <NavItem>
              <NavLink href="" >Log-in</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Language
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Vietnamese
                </DropdownItem>
                <DropdownItem>
                  English
                </DropdownItem>
                <DropdownItem>
                  Chinese
                </DropdownItem>
                <DropdownItem>
                  German
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Dafault
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}

export default MenuBar;