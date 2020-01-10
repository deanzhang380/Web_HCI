import React from "react";
import "./room.css";
import {
    Media,
    Row,
    Col,
    Input,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import gridImage1 from "../../Img/Grid5.png"
import gridImage2 from "../../Img/Grid1.png"
import logoImage from "../../Img/logo_navbar.jpg"
import Form_book from '../../Main/Form_Book_info/form_book'
import RecomBar from '../../Main/Recommend_Bar/recommend_bar'
import Footer from '../../Footer/footer'
import Reviews from '../../Main/Reviews/reviews';

var imgStyle = {
    minWidth: "40%",
    maxWidth: "20%", "background-color": "rgb(247,247,247)",
};

function Room() {
    return (
        <div className="Room">
            <Row color="light" light expand="md" className="nb">
                <Col lg="3" >
                    <Media style={imgStyle}
                        object
                        src={logoImage}></Media>
                </Col>
                <Col lg="3">
                    <Input
                        className="Searching"
                        type="textarea"
                        placeholder="Searching"
                        rows={1}
                        required
                        maxlength="64"
                        height="100"
                    />
                </Col>
                <Col lg="6">
                    <Navbar className="font-style float-right" light expand="md">
                        <Nav className="mr-auto" navbar>
                            <NavLink href="">Home</NavLink>
                            <NavItem>
                                <NavLink href="">Booking</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Help</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Sign-up</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Log-in
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={() => window.location.href = '/profile'}>Profile</DropdownItem>
                                    <DropdownItem>Account</DropdownItem>
                                    <DropdownItem onClick={() => window.location.href = '/schedure'}>Your Schedure</DropdownItem>
                                    <DropdownItem>Your Booking</DropdownItem>
                                    <DropdownItem>Favorite List</DropdownItem>
                                    <DropdownItem>Payment List</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Language
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Vietnamese</DropdownItem>
                                    <DropdownItem>English</DropdownItem>
                                    <DropdownItem>Chinese</DropdownItem>
                                    <DropdownItem>German</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Default</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <div className="gridImage">
                <div className="GroupImage1">
                    <img src={gridImage1} />
                </div>
                <div className="GroupImage2">
                    <div class="row1">
                        <div class="column">
                            <img src={gridImage2} />
                        </div>
                        <div class="column">
                            <img src={gridImage2} />
                        </div>
                    </div>
                    <div class="row2">
                        <div class="column">
                            <img src={gridImage2} />
                        </div>
                        <div class="column">
                            <img src={gridImage2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="RoomBookForm">
                <Form_book></Form_book>
            </div>
            <div className="Review">
                <Reviews></Reviews>
            </div>
            <div className="RoomList">
                <RecomBar></RecomBar>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Room;
