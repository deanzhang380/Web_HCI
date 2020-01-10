import React, { useState } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";
import "./pay_ment.css";

const Payment = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={() => window.location.href = '/rooms'}>&times;</button>;
    return (
        <div className="PaymentModal">
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
                    <div className="PaymentList">
                        <div className="PaymentRow">
                            <p>CreditCard</p>
                            <p>Date: 29/11/2019</p>
                        </div>
                        <div className="PaymentRowDefault">
                            <p>Type Payment </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="PaymentRow">
                            <p>Type Payment</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="PaymentRow">
                            <p>Type Payment</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="PaymentRow">
                            <p>Type Payment</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </ModalBody>{" "}

                <div className="AddPaymentBtn">
                    <Button className="AddBtn" color="danger" onClick={() => window.location.href = '/rooms'}>
                        ADD PAYMENT{" "}
                    </Button>{" "}
                    <Button className="CancelBtn" color="primary" onClick={() => window.location.href = '/rooms'}>
                        CANCEL{" "}
                    </Button>{" "}
                </div>

            </Modal>{" "}
        </div>
    );
};

export default Payment;
