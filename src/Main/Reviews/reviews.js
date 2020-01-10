import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Review from './../Review_comment/review'

const Reviews = () => {;
  return (
     <div style={{border:"solid black 1px", width:"80%", height:"fit-content",margin:"10px auto"}}>
        <div style={{margin:"20px 0 30px 20px", textAlign:"left"}}>
        <div style={{fontSize:"24px", fontWeight:"600"}}>
            Reviews (380)
        </div>
        <div style={{fontSize:"22px"}}>
            Averange Rate: <span style={{fontWeight:"600",fontSize:"28px"}}>4</span>/5
        </div>
        </div>
        
         <Review></Review>
         <Review></Review>
         <Review></Review>
         <Review></Review>
         <Review></Review>
     </div>
  );
}

export default Reviews;