import React, { useState } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";
import "./transaction.css";
import AvatarImage from "../../../Img/avatar_user.png"
import RoomImage from "../../../Img/Grid4.png"

const Transaction = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={() => window.location.href = '/rooms'}>&times;</button>;
    return (
        <div className="TransactionModal">
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                size="lg" >
                <ModalHeader close={closeBtn}></ModalHeader>{" "}
                <ModalBody>
                    <div className="Title">
                        CONRGRATULATIONS ON YOUR SUCCESSFUL TRANSACTION !
                    </div>
                    <div className="InfoTransaction">
                        <div className="RoomInfoRow">
                            <div className="titleInfo">ROOM INFO</div>
                            <div className="RoomInfo">
                                <p>NAME: NEWYORK HOTEL</p>
                                <p>TYPE: SHARED</p>
                                <p>DATES: 29/11/2019-5/12/2019</p>
                            </div>
                            <div className="roomImage">
                                <img src={RoomImage}></img>
                            </div>
                        </div>
                        <div className="UserInfoRow">
                            <div className="titleInfo">USER INFO</div>
                            <div className="UserInfo">
                                <p>NAME: SELENAGOMES</p>
                                <p>ADDRESS: SHARED</p>
                                <p>DATES: 29/11/2019-5/12/2019</p>
                            </div>
                            <div className="avatarImage">
                                <img src={AvatarImage}></img>
                            </div>
                        </div>
                        <div className="PaymentInfoRow">
                            <div className="titleInfo">PAYMENT INFO</div>
                            <p>TOTAL</p>
                            <p>METHOD PAYMENT</p>
                        </div>
                    </div>
                </ModalBody>{" "}

                <div className="ContactBtn">
                    <Button className="ContactHostBtn" color="danger" onClick={() => window.location.href = '/rooms'}>
                        CONTACT HOST{" "}
                    </Button>{" "}
                    <Button className="CheckTransactionBtn" color="danger" onClick={() => window.location.href = '/rooms'}>
                        CHECK TRANSACTION{" "}
                    </Button>{" "}
                </div>

            </Modal>{" "}
        </div>
    );
};

export default Transaction;
