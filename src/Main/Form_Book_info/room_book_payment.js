import React, { useState } from 'react';
import './form_book.css'
import SimpleMap from './../Google/google_map'
import ComboBox from './../ComboBox/combobox'
import { DropdownItem, Alert, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Input, Label, FormGroup, Container, Row, Col, Form, Media, Button } from 'reactstrap';
import DateTime from "../../General/User/dateTime"
import googlePlusImg from "../../Img/Google Plus.png"
import facebookImg from "../../Img/Facebook.png"

const Form_book_payment = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div style={{ width: "80%", margin: "50px auto" }}>

      <div style={{ margin: "10px 0 0 10px" }}>
        <div className="price margin_top_auto" style={{ width: "fit-content", margin: "20px auto" }}>
          <div className="origin-price">AED 32.00</div>
          <div className="size18">AED 25.60</div>
          <div className="sale-off" style={{ margin: "0 0 0 200px", backgroundColor: "red" }}><div style={{ color: "white" }}>30% Off</div></div>
          {/* <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div> */}

        </div>
        <hr style={{
          width: "70%", margin: "20px auto", "border-top": "1px solid rgba(0,0,0,.8)"
        }}></hr>
        <div className="titleContent">DATES *</div>
        <div className="DateBook">
          <DateTime></DateTime>
        </div>
        <div className="titleContent">GUEST *</div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <ComboBox ></ComboBox>
        </div>

        <div style={{ margin: "0px auto", width: "fit-content" }}>
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

        </div>
        <div className="DepositePercent" >
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
        <div className="titleContent" style={{ fontSize: "20px", fontWeight: "600" }}>ROOM RENTAL METHOD *</div>
        <div className="RoomRentalMethod">
          <div style={{ textAlign: "right" }}>
            <div className="RoomRentalMethodRow1">
              <div className="Share">
                <label className="font-weight size22">SHARED</label>
              </div>
              <div className="Day-Left">
                <div className="DaysLeftTitle">
                  &ensp;<label className="font-weight size22">DAYS-LEFT:</label>
                </div>
                <div className="DaysLeftNumber">
                  &ensp;<label>10 DAYS</label>
                </div>
              </div>
            </div>
            <div className="RoomRentalMethodRow2">
              <div className="Share">
                <label className="font-weight size22">NOT SHARED YET</label>
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
        <div className="titleContent" style={{ fontSize: "20px", fontWeight: "600" }}>ACCOMPANIED SERVICE *</div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <ComboBox ></ComboBox>
        </div>

        <div style={{ width: "fit-content", margin: "20px auto" }}>
          <Button className="SaveButton" color="danger" href="/rooms_book" >
            BOOK NOW
              </Button>
        </div>

      </div>
    </div>
  );
}

export default Form_book_payment;
