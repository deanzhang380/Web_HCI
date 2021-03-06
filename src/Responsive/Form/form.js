import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'
import {
  Button, Form, FormGroup, Label, Input, InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './form.css'

import Random from './../../Home/Random/random';


const Form_fast_book = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const onSubmit = () => props.history.push('/home/profile');

  return (
    <div className="div_form_res">
      <Form className="outside_res">
        <div className="Title">
          <Label>
            SEARCH
        </Label>
        </div>
        <FormGroup >
          <Label for="where">Where</Label>
          <Input placeholder="Where" />
          <div className="link">
            <Button color="link">Google map</Button>
          </div>
        </FormGroup>
        <FormGroup className="ci_co">
          <div>
            <Label >Check-In</Label>
            <Input placeholder="check-in" />
          </div>
          <div>
            <Label >Check-Out</Label>
            <Input placeholder="check-out" />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Guests</Label>
          <div className="guests_input">
            <Input />
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </div>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <div style={{width:"100%", textAlign:"center"}}>
       <Button outline color="danger" className="btn_random_res" onClick={() => window.location.href = 'home/random'}> Random</Button>
      </div>
      

      {/* <FormGroup>
        <Label>Guests</Label>
        <div className="guests_input">
        <Input />
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        </div>
        
      </FormGroup>{' '}
      <div className="div_btn_search">
      <Button className="btn_search">Search</Button>{' '}
      </div>
      
  
    <Button className="btn_random"> Random Place</Button>
 master */}
    </div>
  );
}

export default Form_fast_book;