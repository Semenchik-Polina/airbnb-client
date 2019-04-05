import React, { PureComponent } from 'react';
import moment from 'moment';

import * as constants from '../../constants';

class Timer extends PureComponent {
    state = {
        time: 0,
    };

    componentWillUnmount = () => {
        clearInterval(this.timer);
    };

    startTimer = () => {
        this.timer = setInterval(
            () => this.setState({
                time: moment(this.props.startTime - Date.now()).add(constants.BOOKING_TIME_LIMIT, 'm'),
            }),
            1,
        );
    };

    render() {
        return (
            <div>
                <h3>
                    timer:{' '}
                    {moment(this.props.startTime - Date.now())
                        .add(constants.BOOKING_TIME_LIMIT, 'm')
                        .format('mm:ss')}
                </h3>
                {this.startTimer()}
            </div>
        );
    }
}

export default Timer;
