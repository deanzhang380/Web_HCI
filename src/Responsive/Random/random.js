import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import random_room from "../../Img/randomRoom.png";
import facebook from "../../Img/Facebook.png";
import googlePlus from "../../Img/Google Plus.png";
import starRating from "../../Img/StartRating.png";
import heart from "../../Img/heart.png";
import "./random.css";

const randomRoomImg = {
    src: random_room,
    altText: "randomRoomImg",
    caption: "randomRoomImg"
};

const facebookImg = {
    src: facebook,
    altText: "facebookImg",
    caption: "facebookImg"
};

const googlePlusImg = {
    src: googlePlus,
    altText: "googlePlusImg",
    caption: "googlePlusImg"
};

const starRatingImg = {
    src: starRating,
    altText: "starRatingImg",
    caption: "starRatingImg"
};

const heartImg = {
    src: heart,
    altText: "heartImg",
    caption: "heartImg"
};

const Random_res = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <button className="close" onClick={() => (window.location.href = "/")}>
            &times;
    </button>
    );

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
                <ModalHeader className="title" toggle={toggle} close={closeBtn}>
                    <h6> RANDOM RESULT </h6>
                </ModalHeader>
                <ModalBody>
                    <div className="resultContent_res">
                        <img
                            className="randomRoomImg_res"
                            src={randomRoomImg.src}
                            alt={randomRoomImg.altText}
                        />
                        <div className="body_res">
                            <div className="roomInfo_res">
                                <div className="roomInfoTitle_res">
                                    <label>ROOM INFO</label>
                                </div>
                                <div>
                                    <label className="size30 font-weight">ROOM Title </label>
                                </div>
                                <div>
                                    <label style={{fontSize:"20px",fontWeight:"500"}}>Type Room</label>
                                </div>
                            </div>

                            <div style={{display:"flex"}}>
                                <div className="infoShare_res">
                                    <div className="titleShare_res">
                                        <label style={{fontSize:"16px",fontWeight:"400"}}>SHARE</label>
                                    </div>
                                    <div className="linkShare_res">http//...xyz</div>
                                    <button className="copyBtn_res">Copy</button>
                                </div>
                                <div className="iconShare_res">
                                    <img
                                        className="facebookImg_res"
                                        src={facebookImg.src}
                                        alt={facebookImg.altText}
                                    />
                                    <img
                                        className="googlePlusImg_res"
                                        src={googlePlusImg.src}
                                        alt={googlePlusImg.altText}
                                    />
                                </div>

                            </div>
                            <div style={{width:"fit-content",display:"flex"}}>
                            <div className="ratingShow_res">
                                <img
                                    className="starRating_res"
                                    src={starRatingImg.src}
                                    alt={starRatingImg.altText}
                                />
                                <div className="ratingReal_res">
                                    4/5
                                    </div>

                                <div className="titleRating_res">
                                    AVERAGE RATING
                                </div>
                            </div>
                            <div className="favoriteList_res">
                            <img
                                className="heartImg_res"
                                src={heartImg.src}
                                alt={heartImg.altText}
                            />
                            <label className="addToList_res">ADD TO FAVORTITES</label>
                        </div>
                        {/* <div className="prices_res">
                            <div className="salePrice_res"><strike>PRICE 32.00  </strike></div>
                            <div className="realPrice_res">PRICE 25.60</div>
                            <div className="percentSale_res">30% Off</div>
                        </div> */}

                            </div>
                            
                        </div>
                       
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Book Now
          </Button>{" "}
                    <Button color="info" className="randomAgain" onClick={() => (window.location.href = "/")}>
                        Random Again
          </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Random_res;
