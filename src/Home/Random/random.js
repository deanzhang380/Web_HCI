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
                    <div className="resultContent">
                        <img
                            className="randomRoomImg"
                            src={randomRoomImg.src}
                            alt={randomRoomImg.altText}
                        />
                        <div className="roomInfo">
                            <div className="roomInfoTitle">
                                <label>ROOM INFO</label>
                            </div>
                            <div>
                                <label>ROOM Title Book Here</label>
                            </div>
                            <div>
                                <label>Tyoe Room</label>
                            </div>
                        </div>

                        <div className="share">
                            <div className="titleShare">
                                <label>SHARE NOW</label>
                            </div>
                            <div className="linkShare">http//...xyz</div>
                            <button>Copy Link</button>
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
                        <div className="ratingShow">
                            <img
                                className="starRating"
                                src={starRatingImg.src}
                                alt={starRatingImg.altText}
                            />
                            <div className="ratingNumber">
                                <div className="ratingReal">
                                    <label>4/</label>
                                </div>
                                <div className="totalRating">
                                    <label>5</label>
                                </div>
                            </div>
                            <div className="">
                                <label>AVERAGE RATING</label>
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
                            <div className="salePrice">PRICE 32.00</div>
                            <div className="realPrice">PRICE 25.60</div>
                            <div className="percentSale">30% Off</div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Book Now
          </Button>{" "}
                    <Button color="primary" onClick={() => (window.location.href = "/")}>
                        Random Again
          </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Random;
