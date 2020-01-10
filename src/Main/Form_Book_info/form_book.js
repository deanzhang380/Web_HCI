import React, { useState } from 'react';
import { Container, Row, Col, Form, Media, Button, Alert, Input } from 'reactstrap';
import './form_book.css'
import SimpleMap from './../Google/google_map'
import ComboBox from './../ComboBox/combobox'
import { DropdownItem, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Input, Label, FormGroup, Container, Row, Col, Form, Media, Button } from 'reactstrap';
import './form_book.css'
import DateTime from "../../General/User/dateTime"
import googlePlusImg from "../../Img/Google Plus.png"
import facebookImg from "../../Img/Facebook.png"

const Form_book = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="form_book">
      <Form className="form_book_info">
        <div style={{ margin: "10px 0 0 10px" }}>
          <div className="txt_left font-weight">BRAND</div>
          <div className="txt_left size30 font-weight">Room Book Here</div>
          <div className="txt_left font-weight size18 ">Descriptions</div>
          <div className="txt_left font-weight size14 description">Starting in the city of Pokhara, we'll trek five to six hours per day through the mountains to the top of Mohare Danda, situated 3313 meters (10,869 feet) above sea level.
We'll stop to take in stunning vistas of Himalayan peaks and pass through rhododendron forests. We’ll visit Nangi, the first remote village of Nepal to have wireless Internet and stay in villages inhabited by the Magar people, an indigenous ethnic group of Nepal. Meals will take place at community lodges and teahouses and we'll spend our nights at community homestays run by villagers. </div>
          <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div>
        </div>
        <div style={{ height: "30%", margin: "50px 0px", border: "solid black 1px" }}></div>
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
      <Form className="form_book_payment">
        <div style={{ width: "80%", margin: "20px auto" }}>
          <div style={{ margin: "10px 0 0 10px" }}>
            <div className="price margin_top_auto">
              <div className="origin-price">AED 32.00</div>
              <div className="size18">AED 25.60</div>
              <div className="sale-off" style={{ margin: "0 0 0 300px", backgroundColor: "red" }}><div style={{ color: "white" }}>30% Off</div></div>
              <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div>

            </div>
            <div className="form_book_contact_info" style={{ height: "40%", margin: "50px 0px" }}>
              <Row style={{ width: "100%", height: "100%", margin: "0px 0px" }}>
                <Col xs="6" style={{ width: "50%", height: "100%", border: "solid black 1px" }}>.col-6</Col>
                <Col xs="6" style={{ width: "50%", height: "100%", border: "solid black 1px" }}>.col-6</Col>
              </Row>
            </div>
            <div className="titleContent">DATES *</div>
            <div className="DateBook">
              <DateTime></DateTime>
            </div>
            <div className="titleContent">GUEST *</div>
            <FormGroup>
              <div className="Guests_input">
                <Input className="_input" />
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
            </FormGroup >
            <div className="PaymentMethod">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  DEPOSIT
          </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  PAY OFF
          </Label>
              </FormGroup>
            </div>
            <div className="DepositePercent">
              <div className="Deposite1">
                10%
        </div>
              <div className="Deposite2">
                50%
        </div>
              <div className="Deposite3">
                70%
        </div>
            </div>
            <div className="titleContent">ROOM RENTAL METHOD *</div>
            <div className="RoomRentalMethod">
              <div style={{ textAlign: "right" }}>
                <div className="RoomRentalMethodRow1">
                  <div className="Share">
                    <label>SHARED</label>
                  </div>
                  <div className="Day-Left">
                    <div className="DaysLeftTitle">
                      &ensp;<label>DAYS-LEFT:</label>
                    </div>
                    <div className="DaysLeftNumber">
                      &ensp;<label>10 DAYS</label>
                    </div>
                  </div>
                </div>
                <div className="RoomRentalMethodRow2">
                  <div className="Share">
                    <label>NOT SHARED YET</label>
                  </div>
                  <div className="Link">
                    <div className="linkShare">http//...xyz</div>
                    <button className="copyBtn">Copy</button>
                  </div>
                </div>
              </div>
              <div className="iconShare">
                <img className="facebookImg" src={facebookImg} />
                <img className="googlePlusImg" src={googlePlusImg} />
              </div>
            </div>
            <div className="titleContent">ACCOMPANIED SERVICE *</div>
            <FormGroup>
              <div className="AccompaniedService">
                <Input className="_input" />
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

            <Button className="SaveButton" color="danger" >
              BOOK NOW
      </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Form_book;