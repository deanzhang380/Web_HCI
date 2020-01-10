import React, { useState } from 'react';
import './form_book.css'
import SimpleMap from './../Google/google_map'
import ComboBox from './../ComboBox/combobox'
import { DropdownItem, Alert, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Input, Label, FormGroup, Container, Row, Col, Form, Media, Button } from 'reactstrap';
import DateTime from "../../General/User/dateTime"
import googlePlusImg from "../../Img/Google Plus.png"
import facebookImg from "../../Img/Facebook.png"
import Select from 'react-select';
const options_payment=[
    { value: 'Visa', label: 'Visa' },
    { value: 'Master Card', label: 'Master Card' },
    { value: 'Momo', label: 'MoMo' },
]
const options_country = [
    { value: 'VietNam', label: 'VietNam' },
    { value: 'USA', label: 'USA' },
    { value: 'China', label: 'China' },
    { value: 'Japan', label: 'Japan' }
  ]

  const options_city = [
    { value: 'VietNam', label: 'TPHCM' },
    { value: 'USA', label: 'WashintonDC' },
    { value: 'China', label: 'BeiJing' },
    { value: 'Japan', label: 'Tokyo' }
  ]


const Form_book_method_payment = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div style={{ width: "80%", margin: "50px auto",height:"90%" }}>
          <div className="titleContent">METHOD PAYMENT*</div>
            <div style={{width:"80%", margin:"10px auto 0"}}>
                <Select options={options_payment}></Select>
            </div>
            
            <div className="titleContent">PAYMENT INFO *</div>
            
            <div className="titleContent" style={{marginTop:"0"}}>TYPE:</div>
            <div className="DateBook">
              <DateTime></DateTime>
            </div>
            <div className="Table_result" >
                <div style={{display:"flex"}}>
                    <div style={{width:"80%", margin:"10px 0 0 10px"}}>
                    <div style={{margin:"15px 0 0 10px"}}>Fee a day x Days</div>
                    </div>
                    <div style={{width:"18%", margin:"10px 0 0 0px",textAlign:"right"}}>
                    <div style={{margin:"15px 40px 0 10px"}}>1000$</div>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                <div style={{width:"80%", margin:"10px 0 0 10px"}}>
                    <div style={{margin:"15px 0 0 10px"}}>Services and texas</div>
                    </div>
                    <div style={{width:"18%", margin:"10px 0 0 0px",textAlign:"right"}}>
                    <div style={{margin:"15px 40px 0 10px"}}>1000$</div>
                    </div>
                </div>
                <hr style={{width:"80%","border-top": "1px solid rgba(0,0,0,.8)"}}></hr>
                <div style={{display:"flex"}}>
                    <div style={{width:"80%", margin:"10px 0 0 10px"}}>
                    <div style={{margin:"15px 0 0 10px", }} className="size30 font-weight">Totals</div>
                    </div>
                    <div style={{width:"18%", margin:"10px 0 0 10px",textAlign:"right"}}>
                    <div style={{margin:"15px 40px 0 10px"}} className="size30 font-weight">2000$</div>
                    </div>
                </div>
            </div>
            <div className="titleContent">CUSTOMER INFO *</div>
            <div className="Customer_detail" style={{height:"30%"}}>
            <Row style={{ width: "100%", height: "30%", margin: "0px 10px" }}>
                <Col xs="6" style={{ width: "50%", height: "100%" }}>
                    <Input placeholder="First Name" ></Input>
                    <div style={{margin:"20px 0"}}>
                        <Select  options={options_country}></Select>
                    </div>
                   
                </Col>
                <Col xs="6" style={{ width: "50%", height: "100%"}}>
                 <Input placeholder="Last Name" ></Input>
                 <div style={{margin:"20px 0"}}>
                        <Select  options={options_city}></Select>
                    </div>
                </Col>
             </Row>
             <Row style={{ width: "100%", height: "30%", margin: "0px 10px" }}>
                <Col xs="12" style={{ width: "50%", height: "100%" }}>
                    <Input placeholder="Address" ></Input>
    
                   
                </Col>
             </Row>
             <Row style={{ width: "100%", height: "30%", margin: "0px 10px" }}>
             <Col xs="6" style={{ height: "fit-content",textAlign:"center" }}>
             <div style={{width:"80%", margin:"0 auto"}}>
             <Button color="danger" style={{width:"80%"}}>Add Payment</Button>{' '}   
             </div>
              
                </Col>
                <Col xs="6" style={{  height: "fit-content", textAlign:"center"}}>
                <div style={{width:"80%", margin:"0 auto"}}>
                     <Button color="dark" style={{width:"80%"}}>Next</Button>{' '}   
                </div>
                </Col>
             </Row>
            </div>
        </div>
  );
}

export default Form_book_method_payment;
