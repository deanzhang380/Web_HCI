import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "reactstrap";

import './otpCreation.css'
import OtpInput from 'react-otp-input';

class createOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            numInputs: 4,
            separator: '-',
            isDisabled: true,
            hasErrored: false,
            isInputNum: false,
        };
    }

    render() {
        return (
            <div className="App">
                <OtpInput
                    inputStyle="inputStyle"
                    onChange={otp => this.otp = otp}
                    numInputs={4}
                    separator={<span>-</span>}
                    value={this.otp}
                />
            </div>
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         otp: '',
    //         numInputs: 4,
    //         separator: '-',
    //         isDisabled: true,
    //         hasErrored: false,
    //         isInputNum: false,
    //     };
    // }

    // handleOtpChange = otp => {
    //     this.setState({ otp });
    // };

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // clearOtp = () => {
    //     this.setState({ otp: '' });
    // };

    // handleCheck = e => {
    //     const { name } = e.target;
    //     this.setState(prevState => ({ [name]: !prevState[name] }));
    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     alert(this.state.otp);
    // };

    // render() {
    //     return (
    //         <div className="App">
    //         <OtpInput
    //             // inputStyle="inputStyle"
    //             // numInputs={this.state.numInputs}
    //             // isDisabled={this.state.isDisabled}
    //             // hasErrored={this.state.hasErrored}
    //             // errorStyle="this.state.error"
    //             // onChange={this.handleOtpChange}
    //             // separator={<span>{this.state.separator}</span>}
    //             // isInputNum={this.state.isInputNum}
    //             // shouldAutoFocus
    //             // value={this.state.otp}
    //             inputStyle="inputStyle"
    //             onChange={otp => this.otp = otp}
    //             numInputs={4}
    //             separator={<span>-</span>}
    //             value={this.otp}
    //             />
    //         </div>
    //     );
    // }
}

export default createOtp;