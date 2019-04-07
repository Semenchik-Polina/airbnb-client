import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment, { Moment } from 'moment';

import CountDown from 'react-countdown-now';

import * as constants from '../../constants';

class Timer extends Component {
    static propTypes = {
        date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]).isRequired,
    };

    renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>complete</span>;
        }
        // Render a countdown
        return (
            <span>
                {minutes}:{seconds}
            </span>
        );
    };

    render() {
        const { date } = this.props;

        return <CountDown date={moment(date).add(constants.BOOKING_TIME_LIMIT, 'm')} renderer={this.renderer} />;
    }
}

export default Timer;
