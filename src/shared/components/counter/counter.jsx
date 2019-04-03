import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './counter.scss';

class Counter extends PureComponent {
    static defaultProps = {
        className: '',
        value: 0,
        isMinusDisabled: false,
        isPlusDisabled: false,
    };

    static propTypes = {
        className: PropTypes.string,
        onMinusClick: PropTypes.func.isRequired,
        onPlusClick: PropTypes.func.isRequired,
        value: PropTypes.number,
        isMinusDisabled: PropTypes.bool,
        isPlusDisabled: PropTypes.bool,
    };

    render() {
        const {
            className, onMinusClick, onPlusClick, value, isMinusDisabled, isPlusDisabled,
        } = this.props;

        const counterClasses = classNames('counter', className);
        const plusButtonClasses = classNames('counter__button', { counter__button_disabled: isPlusDisabled });
        const minusButtonClasses = classNames('counter__button', { counter__button_disabled: isMinusDisabled });

        return (
            <div className={counterClasses}>
                <button className={minusButtonClasses} type="button" onClick={onMinusClick} disabled={isMinusDisabled}>
                    <span className="counter__button-sign">-</span>
                </button>
                <span className="counter__value">{value}</span>
                <button className={plusButtonClasses} type="button" onClick={onPlusClick} disabled={isPlusDisabled}>
                    <span className="counter__button-sign">+</span>
                </button>
            </div>
        );
    }
}

export default Counter;
