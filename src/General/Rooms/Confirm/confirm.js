import React, { useState } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";
import OtpInput from 'react-otp-input';
import "./confirm.css";

const Confirm = props => {
    var state = {
        otpValue: 1,
        numInputs: 4,
        separator: '-',
        isDisabled: false,
        hasErrored: false,
        isInputNum: false,
    };
    const { className } = props;
    let otpValue = 2;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={() => window.location.href = '/rooms'}>&times;</button>;
    return (
        <div className="ConfirmModal">
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                size="lg" >
                <ModalHeader close={closeBtn}></ModalHeader>{" "}
                <ModalBody>
                    <div className="StepTitle">
                        <div className="Step font-weight">
                            <div className="step1">STEP1</div>
                            <div className="step2">STEP2</div>
                            <div className="step3">STEP3</div>
                        </div>
                        <div className="PaymentTitle">
                            <div className="AddPaymentTitle">ADD PAYMENT</div>
                            <div className="AcceptTitle">ACCEPT RULES AND TERMS</div>
                            <div className="ConfirmTitle">CONFIRM AND PAY</div>
                        </div>
                    </div>
                    <div>
                        <div className="CheckEmail"><a href="">CHECK YOUR EMAIL AND FILL OUT CONFIRMATION CODE</a></div>
                        <div className="ConfirmCode">
                            <OtpInput
                                inputStyle="inputStyle"
                                onChange={otp => { state.otpValue = otp; console.log(otpValue) }}
                                numInputs={4}
                                separator={<span>-</span>}
                                value="9628 "
                            />
                        </div>
                        <div className="SendAgain"><a href="">SEND AGAIN</a></div>
                        <div className="Contact"><p>IF YOUR CONFIRM HAS PROBLEMS PLEASE</p>
                            <a href=""> CONTACT US</a></div>
                    </div>
                </ModalBody>{" "}

                <div className="AddAcceptBtn">
                    <Button className="AcceptBtn" color="info" onClick={() => window.location.href = '/rooms_book/transaction'}>
                        CONFIRM{" "}
                    </Button>{" "}
                </div>

            </Modal>{" "}
        </div>
    );
};

export default Confirm;
