import React, { useState } from 'react';
import './form_book.css'
import SimpleMap from './../Google/google_map'
import ComboBox from './../ComboBox/combobox'
import { DropdownItem, Alert, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Input, Label, FormGroup, Container, Row, Col, Form, Media, Button } from 'reactstrap';
import DateTime from "../../General/User/dateTime"
import googlePlusImg from "../../Img/Google Plus.png"
import facebookImg from "../../Img/Facebook.png"

const Form_book_info = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <Form className="form_book_info">
      <div style={{ margin: "10px 0 0 10px" }}>
        <div className="txt_left font-weight">BRAND</div>
        <div className="txt_left size30 font-weight">Room Book Here</div>
        <div className="txt_left font-weight size18 ">Descriptions</div>
        <div className="txt_left font-weight size14 description">Starting in the city of Pokhara, we'll trek five to six hours per day through the mountains to the top of Mohare Danda, situated 3313 meters (10,869 feet) above sea level.
We'll stop to take in stunning vistas of Himalayan peaks and pass through rhododendron forests. We’ll visit Nangi, the first remote village of Nepal to have wireless Internet and stay in villages inhabited by the Magar people, an indigenous ethnic group of Nepal. Meals will take place at community lodges and teahouses and we'll spend our nights at community homestays run by villagers. </div>
        <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div>
      </div>
      <div style={{ height: "25%", margin: "50px 0px" }}>
        <div className="dateTime" style={{
          width: "100%", margin: "30px 70px", textAlign: "left "
        }}>
          <DateTime></DateTime>
        </div>
      </div>
      <div className="form_book_contact_info" style={{ height: "20%", margin: "50px 0px" }}>
        <Row style={{ width: "100%", height: "100%", margin: "0px 0px" }}>
          <Col xs="6" style={{ width: "50%", height: "100%", border: "solid black 1px" }}>
            <div className="size18 font-weight" style={{ textAlign: "left", margin: "10px 0" }}>
              CONTACT INFO
    </div>
            <div style={{ marginTop: "40px" }}>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Phone:
    </Alert>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Email:
    </Alert>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Social Media:
    </Alert>

            </div>
          </Col>
          <Col xs="6" style={{ width: "50%", height: "100%", border: "solid black 1px" }}>
            <div className="size18 font-weight" style={{ textAlign: "left", margin: "10px 0" }}>
              NOTE AND HOUSE RULE
    </div>
            <div style={{ marginTop: "40px" }}>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Rule 1:
    </Alert>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Rule 2:
    </Alert>
              <Alert color="dark" style={{ textAlign: "left" }}>
                Rule 3:
    </Alert>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ width: "500px", height: "300px", margin: "0px auto" }}>
        <SimpleMap style={{ height: "100%" }}></SimpleMap>
      </div>
    </Form>

  );
}

export default Form_book_info;
