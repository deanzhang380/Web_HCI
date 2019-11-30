import React, { useState } from 'react';
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';
import './tagbar.css'

const Tagbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="div-tagbar">
            <Button className="btn-style btn-seeall" color="link">
                SEE ALL
            </Button>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle  className="drop_down_toggle" caret>
                    DATE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle className="drop_down_toggle" caret>
                    PRICE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="btn-style">
                <DropdownToggle  className="drop_down_toggle" caret>
                    RATING
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown   className="btn-style">
                <DropdownToggle className="drop_down_toggle" caret>
                    TYPE
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Tagbar;