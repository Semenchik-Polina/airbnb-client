import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TimePicker from 'react-time-picker';

class TimePickerInput extends PureComponent {
    static propTypes = {
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            onBlur: PropTypes.func.isRequired,
            value: PropTypes.string,
        }).isRequired,
    };

    onChange = time => this.props.input.onChange(time);

    render() {
        const { value } = this.props.input;

        return <TimePicker onChange={this.onChange} value={value} />;
    }
}

export default TimePickerInput;
