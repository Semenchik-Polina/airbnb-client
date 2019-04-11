import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CountDown from 'react-countdown-now';
import ModalTimeout from '../modal-timeout/modal-timeout';

import * as constants from '../../constants';

import './timer.scss';

class Timer extends Component {
    static propTypes = {
        date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
        onTimeout: PropTypes.func.isRequired,
    };

    state = {
        isTimeoutModalShown: false,
    };

    componentWillUnmount = () => {
        this.setState({
            isTimeoutModalShown: false,
        });
    }

    renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            if (!this.state.isTimeoutModalShown) {
                this.setState({
                    isTimeoutModalShown: true,
                });
            }

            return <span className="timer__inner">Time out</span>;
        }
        return (
            <span className="timer__inner">
                {minutes}:{seconds}
            </span>
        );
    };

    handleModalClose = () => {
        this.props.onTimeout();
    }

    render() {
        const { date } = this.props;
        const { isTimeoutModalShown } = this.state;

        return (
            <div className="timer">
                <img src="https://img.icons8.com/metro/23/3f3f41/alarm-clock.png" alt="clock" />
                <CountDown
                    date={moment(date)
                        .add(constants.BOOKING_TIME_LIMIT, 'm')
                        .toDate()}
                    renderer={this.renderer}
                />
                {isTimeoutModalShown && <ModalTimeout onClose={this.handleModalClose} />}
            </div>
        );
    }
}

export default Timer;
