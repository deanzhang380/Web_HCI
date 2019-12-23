import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";
import "./schedure.css";

const Schedure = props => {
    const { className } = props;
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={() => window.location.href = '/'}>&times;</button>;
    return (
        <div className="schedureModal">
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                size="lg"
            >
                <ModalHeader close={closeBtn}> <div className="nameUser">
                    <h6> SELENA' SCHEDURE </h6> </div></ModalHeader>{" "}
                <ModalBody>
                    <div className="Destination">
                        NEWYORK
                    </div>
                    <div className="Date">
                        <div className="startDate">
                            START DATE
                        </div>
                        <div className="endDate">
                            END DATE
                        </div>
                    </div>
                </ModalBody>{" "}
                <ModalFooter>
                    <Button color="danger" onClick={() => window.location.href = '/'}>
                        Save{" "}
                    </Button>{" "}
                </ModalFooter>{" "}
            </Modal>{" "}
        </div>
    );
};

export default Schedure;
