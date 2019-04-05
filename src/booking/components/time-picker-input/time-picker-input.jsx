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
        minTime: PropTypes.string.isRequired,
        defaultTime: PropTypes.string.isRequired,
    };

    onChange = (time) => {
        if (time) {
            this.props.input.onChange(time);
            return;
        }
        this.props.input.onChange(this.props.defaultTime);
    };

    render() {
        const {
            input: { value }, defaultTime,
            ...props
        } = this.props;

        return <TimePicker onChange={this.onChange} value={value} {...props} />;
    }
}

export default TimePickerInput;
