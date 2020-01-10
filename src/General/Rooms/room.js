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
import MenuBar_Rooms from './../../Header/Navbar/navbar_rooms'
import Form_book_payment from './../../Main/Form_Book_info/room_book_payment'
var imgStyle = {
    minWidth: "100%",
    maxWidth: "135%", "background-color": "rgb(247,247,247)",
};

function Room() {
    return (
        <div className="Room">
            <MenuBar_Rooms></MenuBar_Rooms>
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
                <Form_book_payment></Form_book_payment>
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
