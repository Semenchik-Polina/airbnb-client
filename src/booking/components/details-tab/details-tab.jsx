import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Field, Form } from 'redux-form';

import CounterInput from '../../../shared/components/counter-input/counter-input';
import Button from '../../../shared/components/button/button';
import TimePickerInput from '../time-picker-input/time-picker-input';

import * as constants from '../../constants/index';

import './details-tab.scss';

class DetailsTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        addBookingDetails: PropTypes.func.isRequired,
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            guests: PropTypes.number,
            room: PropTypes.shape({
                _id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                services: PropTypes.arrayOf(PropTypes.string),
            }),
            hotel: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
            }),
            totalPrice: PropTypes.number,
            dateFrom: PropTypes.instanceOf(Date),
            dateTo: PropTypes.instanceOf(Date),
        }).isRequired,
    };

    handleSubmit = (values) => {
        this.props.addBookingDetails(values, this.props.booking._id);
    };

    render() {
        const { handleSubmit, booking } = this.props;

        const nightsInHotel = moment(booking.dateTo).diff(moment(booking.dateFrom), 'days');
        const dateLabel = nightsInHotel > 1 ? `${nightsInHotel} nights` : '1 night';

        return (
            <div className="details-tab">
                <div className="details-tab__header">Booking details</div>
                <Form className="details-tab__form" onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="details-tab__form-section">
                        <span className="details-tab__form-section-header">
                            {dateLabel} in {booking.hotel.city}
                        </span>
                        <div className="details-tab__form-section-wrapper">
                            <div className="details-tab__form-section-wrapper-item">
                                <div className="details-tab__form-section-inner">
                                    <div className="details-tab__form-section-inner-date">
                                        <span className="details-tab__form-section-inner-date-item">
                                            {moment(booking.dateFrom)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </span>
                                        <span className="details-tab__form-section-inner-date-item">
                                            {moment(booking.dateFrom).format('D')}
                                        </span>
                                    </div>
                                </div>
                                <div className="details-tab__form-section-inner">
                                    <Field
                                        component={TimePickerInput}
                                        name="arrivalTime"
                                        minTime={constants.MIN_ARRIVAL_TIME}
                                        maxTime={constants.MAX_ARRIVAL_TIME}
                                        defaultTime={constants.MIN_ARRIVAL_TIME}
                                    />
                                </div>
                            </div>
                            <div className="details-tab__form-section-wrapper-item">
                                <div className="details-tab__form-section-inner">
                                    <div className="details-tab__form-section-inner-date">
                                        <span className="details-tab__form-section-inner-date-item">
                                            {moment(booking.dateTo)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </span>
                                        <span className="details-tab__form-section-inner-date-item">
                                            {moment(booking.dateTo).format('D')}
                                        </span>
                                    </div>
                                </div>
                                <div className="details-tab__form-section-inner">
                                    <Field
                                        component={TimePickerInput}
                                        name="departureTime"
                                        minTime={constants.MIN_DEPARTURE_TIME}
                                        maxTime={constants.MAX_DEPARTURE_TIME}
                                        defaultTime={constants.MAX_DEPARTURE_TIME}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-tab__form-section">
                        <div className="details-tab__form-section-wrapper">
                            <span className="details-tab__form-section-summary">Final guests count: </span>
                            <Field component={CounterInput} name="guests" maxValue={booking.room.capacity} />
                        </div>
                    </div>
                    <div className="details-tab__form-section">
                        <div className="details-tab__form-section-wrapper">
                            <span className="details-tab__form-section-summary">Services: </span>
                        </div>
                    </div>
                    <Button className="details-tab__form-button-submit" color="secondary">
                        Apply
                    </Button>
                </Form>
            </div>
        );
    }
}

export default DetailsTab;
