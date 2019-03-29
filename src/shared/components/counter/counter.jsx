import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './counter.scss';

class Counter extends PureComponent {
    static defaultProps = {
        className: '',
        value: 0,
    };

    static propTypes = {
        className: PropTypes.string,
        onMinusClick: PropTypes.func.isRequired,
        onPlusClick: PropTypes.func.isRequired,
        value: PropTypes.number,
    };

    render() {
        const {
            className, onMinusClick, onPlusClick, value,
        } = this.props;

        const counterClasses = classNames('counter', className);
        const minusButtonClasses = classNames('counter__button', { counter__button_disabled: !value });

        return (
            <div className={counterClasses}>
                <button className={minusButtonClasses} type="button" onClick={onMinusClick} disabled={!value}>
                    <span className="counter__button-sign">-</span>
                </button>
                <span className="counter__value">{value}</span>
                <button className="counter__button" type="button" onClick={onPlusClick}>
                    <span className="counter__button-sign">+</span>
                </button>
            </div>
        );
    }
}

export default Counter;
