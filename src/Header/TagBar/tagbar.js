import React, { useState } from 'react';
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';
import './tagbar.css'

const Tagbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="div-tagbar" >
            <Button className="btn-style btn-seeall" color="link">
                SEE ALL
            </Button>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle  className="drop_down_toggle" caret>
                    DATE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem >Short Vocation</DropdownItem>
                    <DropdownItem >Long Vocation</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle className="drop_down_toggle" caret>
                    PRICE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem >Above 2000$</DropdownItem>
                    <DropdownItem >500$ ~ 2000$</DropdownItem>
                    <DropdownItem>100$ ~ 500$</DropdownItem>
                    <DropdownItem>Below 100$</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle  className="drop_down_toggle" caret>
                    RATING
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>5 Star</DropdownItem>
                    <DropdownItem >4 Star</DropdownItem>
                    <DropdownItem>3 Star</DropdownItem>
                    <DropdownItem>2 ~ 1 Star</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown   className="btn-style">
                <DropdownToggle className="drop_down_toggle" caret>
                    TYPE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Place</DropdownItem>
                    <DropdownItem>Resort</DropdownItem>
                    <DropdownItem>Coffee</DropdownItem>
                    <DropdownItem>Restaurant</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Tagbar;