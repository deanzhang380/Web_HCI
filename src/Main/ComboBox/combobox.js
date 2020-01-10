import React from 'react';
import Select from 'react-select';

let options = [
  { value: '1 Adults , 1 Infants', label: '1 Adults , 1 Infants' },
  { value: '2 Adults , 1 Infants', label: '2 Adults , 1 Infants' },
  { value: '3 Adults , 1 Infants', label: '3 Adults , 1 Infants' },
];


class ComboBox extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default ComboBox;