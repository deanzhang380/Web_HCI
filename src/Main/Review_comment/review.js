import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StarRate from './../Star_Rating/star_rating';
import Avatar from 'react-avatar';
import img from './../../Img/Capture.PNG'
const Review = () => {;
  return (
      <div style={{display:"flex",margin:"10px auto 0 auto", width:"95%", height:"fit-content"}}>
      <div >
      <Avatar  googleId="118096717852922241760" size="100" round={true} src={img}  />
      </div>
        <div style={{textAlign:"left",margin:"10px"}}>
            <div style={{fontSize:"22px",fontWeight:"800"}}>
                Deanzhang
            </div>
            <StarRate></StarRate>
            <div style={{marginTop:"10px", fontSize:"12px"}}>Comment on dd/mm/yy.</div>
            <div>
            5 Stars from me & my family- We just spent the weekend here & it was everything the pics share & more! Our 3 girls got to help feed their horses & we got some freshly laid eggs from their cute chooks. The pool was the highlight for us along with Kerri & her daughter whom were…Read more
            </div>
        </div>
      </div>
     
  );
}

export default Review;