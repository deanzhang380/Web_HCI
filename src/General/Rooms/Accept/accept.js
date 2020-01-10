import React, { useState } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";
import "./accept.css";

const Accept = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={() => window.location.href = '/rooms'}>&times;</button>;
    return (
        <div className="AcceptModal">
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
                    <div className="Rules">
                        <div className="RulesRow">
                            <ul>
                                <li>No smoking</li>
                                <li>No pets</li>
                                <li>No parties or events</li>
                                <li>Arrive even earlier than before (especially true for international flights)
                                    you cannot carryguns onto a plane and there are no exceptions,
                                    you must check them; some items cannot be checked, so contact the TSA if you are uncertain.
                                </li>
                                <li>Bring government-issued identification
                                    you cannot carry-on most tools (hammers, axes, drills, etc),
                                    the exceptions are tools that are smaller than 7 inches such as a small screwdriver or pair of pliers;
                                    everything else must be checked.
                                </li>
                                <li>Bring your ticket and have it ready at all times
                                    you cannot carry-on any self-defense items, they must be checked.
                                </li>
                                <li>Limit yourself to one carry-on item,
                                    these items cannot be carried-on or checked with the only exceptions being a common lighter can be
                                    carried-on but not checked and small compressed gas cartridges can be carried-on or checked (such as for a life vest).
                                </li>
                                <li>Don't bring any prohibited items onboard (see below).these items cannot be carried on and must be checked,
                                    with the exceptions provided in more detail in the next section.</li>
                                <li>Avoid baggy or loose clothing (this includes headwear)</li>
                            </ul>
                        </div>

                    </div>
                </ModalBody>{" "}

                <div className="AddAcceptBtn">
                    <Button className="AcceptBtn" color="danger" onClick={() => window.location.href = '/rooms'}>
                        ACCEPT{" "}
                    </Button>{" "}
                    <Button className="CancelAcceptBtn" color="primary" onClick={() => window.location.href = '/rooms'}>
                        CANCEL{" "}
                    </Button>{" "}
                </div>

            </Modal>{" "}
        </div>
    );
};

export default Accept;
