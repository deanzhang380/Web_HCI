import React, { useState } from 'react';
import './form_book.css'
import SimpleMap from './../Google/google_map'
import ComboBox from './../ComboBox/combobox'
import { DropdownItem, Alert, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Input, Label, FormGroup, Container, Row, Col, Form, Media, Button } from 'reactstrap';
import DateTime from "../../General/User/dateTime"
import googlePlusImg from "../../Img/Google Plus.png"
import facebookImg from "../../Img/Facebook.png"
import Form_book_payment from './room_book_payment'
import Form_book_info from './room_book_info'
import Form_book_method_payment from './form_book_method_payment'
const Form_book = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="form_book">
      <Form_book_info></Form_book_info>
      <Form className="form_book_payment">
        {/* <Form_book_payment></Form_book_payment> */}
        <Form_book_method_payment></Form_book_method_payment>
      </Form>
    </div>
  );
}

export default Form_book;