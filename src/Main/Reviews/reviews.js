import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Review from './../Review_comment/review'

const Reviews = () => {;
  return (
     <div style={{border:"solid black 1px", width:"80%", height:"fit-content",margin:"10px auto"}}>
         <Review></Review>
         <Review></Review>
         <Review></Review>
         <Review></Review>
         <Review></Review>
     </div>
  );
}

export default Reviews;