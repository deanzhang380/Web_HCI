import React, { useState } from "react";
import DateTime from "../dateTime"

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
    const closeBtn = <button className="close" onClick={() => window.location.href = '/home'}>&times;</button>;
    return (
        <div className="schedureModal">
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                size="lg" >
                <ModalHeader close={closeBtn}> <div className="nameUser">
                    <h6> SELENA' SCHEDURE </h6> </div></ModalHeader>{" "}
                <ModalBody>
                    <div className="PlacetTile">
                        DESTINATION
                    </div>
                    <div className="Destination">
                        <div class="form-group">
                            <Input style={{ height: "60px" }}
                                className="destination"
                                type="textarea"
                                placeholder="NewYork city, American"
                                rows={1}
                                required
                                maxlength="64"
                            />
                        </div>{" "}
                    </div>
                    <div className="linkGoogleMap">
                        <a href="https://www.google.com/maps">GOOGLE-MAP</a>
                    </div>
                    <div className="DateTime">
                        <div className="CalendarTitle">
                            CALENDAR
                        </div>
                        <div className="DateTimeSchedure" style={{ margin: "20px auto 0px", textAlign: "left" }}>
                            <DateTime ></DateTime>
                        </div>
                    </div>

                </ModalBody>{" "}
                <ModalFooter>
                    <Button color="danger" onClick={() => window.location.href = '/home'}>
                        Save{" "}
                    </Button>{" "}
                </ModalFooter>{" "}
            </Modal>{" "}
        </div>
    );
};

export default Schedure;
