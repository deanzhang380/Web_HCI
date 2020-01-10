import React, { useState } from 'react';
import { Container, Row, Col, Button ,ButtonDropdown,DropdownToggle,DropdownItem,DropdownMenu,InputGroupButtonDropdown,UncontrolledDropdown} from 'reactstrap';
import Header_Mobile from './../Header/header'
import Form_Fast_Book from './../Form/form'
import Card_info from '../Card/card'
import Relative_Explore from './../Card/relate_explore'
import './Home_mobile.css'
const HomeMobile = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
        <Header_Mobile></Header_Mobile>
        <Form_Fast_Book></Form_Fast_Book>
        <Relative_Explore></Relative_Explore>

        <div className="navbar_res">
            <div style={{width:"fit-content", margin:"0 auto"}}>
              <Button outline color="danger" className="btn_navbar_res">Home</Button>
              <Button outline color="danger" className="btn_navbar_res">Favorites</Button>
              <Button outline color="danger" className="btn_navbar_res" onClick={() => window.location.href = 'home/profile'}>Profile</Button>
              <ButtonDropdown direction="up" style={{width:"10%"}} isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret color="danger">
    Language
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>VietNamese</DropdownItem>
    <DropdownItem>English</DropdownItem>
    <DropdownItem>Chinese</DropdownItem>
  </DropdownMenu>
    </ButtonDropdown>
    
            </div>
        </div>

    </div>
  );
}

export default HomeMobile;