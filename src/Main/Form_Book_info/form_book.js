import React, { useState } from 'react';
import { Container, Row, Col, Form,Media, Button } from 'reactstrap';
import './form_book.css'




const Form_book = () => {;
  return (
  <div className="form_book">
    <Form className="form_book_info">
        <div style={{margin:"10px 0 0 10px"}}>
        <div className="txt_left font-weight">BRAND</div>
            <div className="txt_left size30 font-weight">Room Book Here</div>
            <div className="txt_left font-weight size18 ">Descriptions</div>
            <div className="txt_left font-weight size14 description">Starting in the city of Pokhara, we'll trek five to six hours per day through the mountains to the top of Mohare Danda, situated 3313 meters (10,869 feet) above sea level.
We'll stop to take in stunning vistas of Himalayan peaks and pass through rhododendron forests. We’ll visit Nangi, the first remote village of Nepal to have wireless Internet and stay in villages inhabited by the Magar people, an indigenous ethnic group of Nepal. Meals will take place at community lodges and teahouses and we'll spend our nights at community homestays run by villagers. </div>
            <div className="txt_left "><a href="#" className="font-weight text_underline size14 color_black">Read More</a> </div>
           
        </div>
        <div className="form_book_contact_info" style={{height:"40%",margin:"50px 0px"}}>
        <Row style={{width:"100%",height:"100%", margin:"0px 0px"}}>
        <Col xs="6" style={{width:"50%",height:"100%",border: "solid black 1px"}}>.col-6</Col>
        <Col xs="6" style={{width:"50%",height:"100%",border: "solid black 1px"}}>.col-6</Col>
      </Row>
        </div>
    </Form>
    <Form className="form_book_payment">
        <div style={{width:"80%",margin:"20px auto"}}>
        <div style={{margin:"10px 0 0 10px"}}>
        <div className="price margin_top_auto">
                <div className="origin-price">AED 32.00</div>
                <div className="size18">AED 25.60</div>
                <div className="sale-off" style={{margin:"0 0 0 300px",backgroundColor:"red"}}><div style={{color:"white"}}>30% Off</div></div>
            </div>
            <div>
                <hr style={{margin:"30px 0px"}}></hr>
            </div>
        </div>

        </div>
        
    </Form>
  </div>
  );
}

export default Form_book;