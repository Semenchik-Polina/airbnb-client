import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from '../counter/counter';

class CounterInput extends PureComponent {
    static defaultProps = {
        maxValue: 0,
    };

    static propTypes = {
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            onBlur: PropTypes.func.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }).isRequired,
        maxValue: PropTypes.number,
    };

    handlePlusClick = () => {
        this.props.input.onChange(+this.props.input.value + 1);
    };

    handleMinusClick = () => {
        this.props.input.onChange(this.props.input.value - 1);
    };

    render() {
        const {
            input: { value }, maxValue,
            ...props
        } = this.props;

        return (
            <Counter
                onPlusClick={this.handlePlusClick}
                isMinusDisabled={value === 1 || !value}
                isPlusDisabled={!!maxValue && value === +maxValue}
                onMinusClick={this.handleMinusClick}
                value={value || 1}
                {...props}
            />
        );
    }
}

export default CounterInput;
