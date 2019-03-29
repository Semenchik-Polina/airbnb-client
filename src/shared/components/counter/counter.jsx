import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './counter.scss';

class Counter extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;

        const counterClasses = classNames('counter', className);

        return (
            <div className={counterClasses}>
                <button className="counter__button" type="button">
                    <span className="counter__button-sign">-</span>
                </button>
                <span className="counter__value">value</span>
                <button className="counter__button" type="button">
                    <span className="counter__button-sign">+</span>
                </button>
            </div>
        );
    }
}

export default Counter;
