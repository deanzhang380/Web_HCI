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

const Random = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <button className="close" onClick={() => (window.location.href = "/home")}>
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
                    <div className="resultContent">
                        <img
                            className="randomRoomImg"
                            src={randomRoomImg.src}
                            alt={randomRoomImg.altText}
                        />
                        <div className="body">
                            <div className="roomInfo">
                                <div className="roomInfoTitle">
                                    <label>ROOM INFO</label>
                                </div>
                                <div>
                                    <label>ROOM Title Book Here</label>
                                </div>
                                <div>
                                    <label>Type Room</label>
                                </div>
                            </div>

                            <div className="share">
                                <div className="infoShare">
                                    <div className="titleShare">
                                        <label>SHARE NOW</label>
                                    </div>
                                    <div className="linkShare">http//...xyz</div>
                                    <button className="copyBtn">Copy</button>
                                </div>
                                <div className="iconShare">
                                    <img
                                        className="facebookImg"
                                        src={facebookImg.src}
                                        alt={facebookImg.altText}
                                    />
                                    <img
                                        className="googlePlusImg"
                                        src={googlePlusImg.src}
                                        alt={googlePlusImg.altText}
                                    />
                                </div>

                            </div>

                            <div className="ratingShow">
                                <img
                                    className="starRating"
                                    src={starRatingImg.src}
                                    alt={starRatingImg.altText}
                                />

                                <div className="ratingReal">
                                    4/5
                                    </div>

                                <div className="titleRating">
                                    AVERAGE RATING
                                </div>
                            </div>
                        </div>
                        <div className="favoriteList">
                            <img
                                className="heartImg"
                                src={heartImg.src}
                                alt={heartImg.altText}
                            />
                            <label className="addToList">ADD TO FAVORTITES</label>
                        </div>
                        <div className="prices">
                            <div className="salePrice"><strike>PRICE 32.00  </strike></div>
                            <div className="realPrice">PRICE 25.60</div>
                            <div className="percentSale">30% Off</div>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" href="/rooms">
                        Book Now
          </Button>{" "}
                    <Button color="info" className="randomAgain" onClick={() => (window.location.href = "/home/random")}>
                        Random Again
          </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Random;
