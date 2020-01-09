import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import "./profile.css";
import avatar_user from "./../../../Img/avatar_user.png";

const avatarUser = {
  src: avatar_user,
  altText: "avatar",
  caption: "avatar"
};

const Profile = props => {
  const { className } = props;
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={() => window.location.href = '/'}>&times;</button>;
  return (
    <div className="profileModal" >
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ maxWidth: '1000px', maxHeight: "1500px", width: '80%', maxHeight: '1000px', height: '1000px', margin: '10px auto' }}  >
        <ModalHeader close={closeBtn}> <div className="nameUser">
          <h6> SELENA GOMEZ ' INFO </h6> </div></ModalHeader>{" "}
        <ModalBody>
          <div className="infoUser">
            <div className="infoAvatar">
              <h6> PROFILE PICTURE </h6>{" "}
              <img
                className="avatar"
                src={avatarUser.src}
                alt={avatarUser.altText}
              />
            </div>
            <div className="personalDetails">
              <span class="ui-column-title" >PERSONAL DETAILS</span>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label> First Name * </label>
                    <Input
                      className="firstName"
                      type="textarea"
                      placeholder="SELENA"
                      rows={1}
                      required
                      maxlength="64"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label> Last Name * </label>
                    <Input
                      className="lastName"
                      type="textarea"
                      placeholder="GOMEZ"
                      rows={1}
                      required
                      maxlength="64"
                    />
                  </div>{" "}
                </div>
              </div>{" "}
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label> Email Address * </label>
                    <Input
                      className="emailAddress"
                      type="textarea"
                      placeholder=""
                      rows={1}
                      required
                      maxlength="64"
                    />
                  </div>{" "}
                </div>
                <div class="col">
                  <div class="form-group">
                    <label> Mobile Number * </label>
                    <Input
                      className="mobileNumber"
                      type="textarea"
                      placeholder=""
                      rows={1}
                      required
                      maxlength="64"
                    />
                  </div>{" "}
                </div>
              </div>
              <div class="form-group">
                <label> Work location </label>
                <Input
                  className="workLocation"
                  type="textarea"
                  placeholder="Grand Prairie, Texas, U.S."
                  rows={1}
                  maxlength="64"
                />
              </div>{" "}
              <div className="permanentAddress">
                <span class="ui-column-title" >PERMAMENT ADDRESS</span>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label> Street </label>
                      <Input
                        className="street"
                        type="textarea"
                        placeholder="Grand Prairie, Texas, U.S."
                        rows={1}
                        maxlength="64"
                      />
                    </div>{" "}
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label> Area </label>
                      <Input
                        className="area"
                        type="textarea"
                        placeholder="July 22, 1992 (age 27)"
                        rows={1}
                        maxlength="64"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div class="form-group">
                  <label> Emirate </label>{" "}
                  <Input
                    className="emirate"
                    type="textarea"
                    placeholder="Grand Prairie, Texas, U.S."
                    rows={1}
                    maxlength="64"
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </ModalBody>{" "}
        <ModalFooter>
          <Button color="danger" onClick={() => window.location.href = '/'}>
            Save{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>{" "}
    </div >
  );
};

export default Profile;
