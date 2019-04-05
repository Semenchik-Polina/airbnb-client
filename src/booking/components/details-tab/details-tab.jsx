import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';

import CounterInput from '../../../shared/components/counter-input/counter-input';
import Button from '../../../shared/components/button/button';
import TimePickerInput from '../time-picker-input/time-picker-input';

import * as constants from '../../constants/index';

import './details-tab.scss';

class DetailsTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            requestedAt: PropTypes.instanceOf(Date),
            guests: PropTypes.number,
            room: PropTypes.shape({
                _id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                services: PropTypes.arrayOf(PropTypes.string),
            }),
            totalPrice: PropTypes.number,
            dateFrom: PropTypes.instanceOf(Date),
            dateTo: PropTypes.instanceOf(Date),
        }).isRequired,
    };

    handleSubmit = () => {};

    render() {
        const { handleSubmit, booking } = this.props;

        return (
            <div className="details-tab">
                <div>Who’s coming?</div>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field component={CounterInput} name="guests" maxValue={booking.room.capacity} />
                    <span>Arrive at</span>
                    <div className="container">
                        <Field
                            className="container__content"
                            component={TimePickerInput}
                            name="arrivalTime"
                            minTime={constants.MIN_ARRIVAL_TIME}
                            maxTime={constants.MAX_ARRIVAL_TIME}
                            defaultTime={constants.MIN_ARRIVAL_TIME}
                        />
                    </div>
                    <span>Depart at</span>
                    <div className="container">
                        <Field
                            className="container__content"
                            component={TimePickerInput}
                            name="departureTime"
                            minTime={constants.MIN_DEPARTURE_TIME}
                            maxTime={constants.MAX_DEPARTURE_TIME}
                            defaultTime={constants.MAX_DEPARTURE_TIME}
                        />
                    </div>
                    <div className="photo-form__buttons-container">
                        <Button className="photo-form__buttons-container-item" color="secondary">
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default DetailsTab;
