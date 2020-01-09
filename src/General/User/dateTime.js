import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import { DateRangePicker } from 'react-dates';

class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: true,

        };
    }

    render() {
        return (
            <div className="App">
                <DateRangePicker
                    showDefaultInputIcon={true}
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                    selected={true}
                    isOpen={true}
                    openDatePicker={true}
                    defaultShow={this.defaultShow}
                />
            </div>
        );
    }
}

export default DateTime;