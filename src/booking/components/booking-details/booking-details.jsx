import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import moment from 'moment';
import _ from 'lodash';

import { Field, Form, FieldArray } from 'redux-form';

import CounterInput from '../../../shared/components/counter-input/counter-input';
import Button from '../../../shared/components/button/button';
import TimePickerInput from '../time-picker-input/time-picker-input';
import SwitchInput from '../switch-input/switch-input';
import Timer from '../timer/timer';

import history from '../../../shared/tools/history';
import * as constants from '../../constants/index';

import './booking-details.scss';

class BookingDetails extends PureComponent {
    static defaultProps = {
        formValues: null,
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        makeFinalBooking: PropTypes.func.isRequired,
        formValues: PropTypes.shape({
            paidFacilities: PropTypes.arrayOf(
                PropTypes.shape({
                    checked: PropTypes.bool.isRequired,
                    count: PropTypes.number,
                }),
            ),
        }),
        freeFacilities: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                hotelId: PropTypes.string.isRequired,
                facility: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    isPaidPerRoom: PropTypes.bool,
                    canBePaid: PropTypes.bool.isRequired,
                }).isRequired,
                price: PropTypes.number,
            }),
        ).isRequired,
        paidFacilities: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                hotelId: PropTypes.string.isRequired,
                facility: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    isPaidPerRoom: PropTypes.bool,
                    canBePaid: PropTypes.bool.isRequired,
                }).isRequired,
                price: PropTypes.number,
            }),
        ).isRequired,
        booking: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            requestedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
            guests: PropTypes.number,
            room: PropTypes.shape({
                id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                hotel: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                    city: PropTypes.string.isRequired,
                    hotelName: PropTypes.string.isRequired,
                }),
            }).isRequired,
        }).isRequired,
    };

    handleSubmit = (details) => {
        this.props.makeFinalBooking(this.props.booking, details);
    };

    renderRedirectToHotels = () => {
        history.push('/hotels');
    };

    renderPaidFacilities = ({ fields, className }) => {
        const { formValues, paidFacilities } = this.props;
        const fieldClasses = classNames('facility-field', className);

        return fields.map((member, index) => (
            <div key={index} className={fieldClasses}>
                <div className="facility-field__item">{_.upperFirst(paidFacilities[index].facility.name)}</div>
                <div className="facility-field__item-price">${_.upperFirst(paidFacilities[index].price)}</div>
                <Field className="facility-field__item" component={SwitchInput} name={`${member}.checked`} />
                {formValues.paidFacilities[index].checked && !paidFacilities[index].facility.isPaidPerRoom && (
                    <Field className="facility-field__item" component={CounterInput} name={`${member}.count`} />
                )}
            </div>
        ));
    };

    render() {
        const { handleSubmit, booking, freeFacilities } = this.props;

        const nightsInHotel = moment(booking.dateTo).diff(moment(booking.dateFrom), 'days');
        const dateLabel = nightsInHotel > 1 ? `${nightsInHotel} nights` : '1 night';

        const timeUnit = moment(booking.dateTo).diff(moment(booking.dateFrom), 'd');
        const roomPrice = booking.room.cost;

        const detailsPrice = this.props.formValues
            ? _.sumBy(this.props.formValues.paidFacilities, (facility) => {
                const { price } = _.find(booking.room.hotel.services, { id: facility.id });
                if (facility.checked) {
                    return facility.count ? facility.count * price : price;
                }
                return 0;
            })
            : 0;

        const totalPrice = (detailsPrice + roomPrice) * timeUnit;

        return (
            <div className="booking-details">
                <span className="booking-details__header">Booking details</span>
                <span className="booking-details__timer">
                    <Timer date={booking.requestedAt} onTimeout={this.renderRedirectToHotels} />
                </span>
                <Form className="booking-details__form" onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="booking-details__form-section">
                        <span className="booking-details__form-section-header">
                            {dateLabel} in {booking.room.hotel.city} — ${booking.room.cost} per night
                        </span>
                        <div className="booking-details__form-section-wrapper">
                            <div className="booking-details__form-section-wrapper-item">
                                <div className="booking-details__form-section-inner">
                                    <div className="booking-details__form-section-inner-date">
                                        <span className="booking-details__form-section-inner-date-item">
                                            {moment(booking.dateFrom)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </span>
                                        <span className="booking-details__form-section-inner-date-item">
                                            {moment(booking.dateFrom).format('D')}
                                        </span>
                                    </div>
                                </div>
                                <div className="booking-details__form-section-inner">
                                    <Field
                                        component={TimePickerInput}
                                        name="arrivalTime"
                                        minTime={constants.MIN_ARRIVAL_TIME}
                                        maxTime={constants.MAX_ARRIVAL_TIME}
                                        defaultTime={constants.MIN_ARRIVAL_TIME}
                                    />
                                </div>
                            </div>
                            <div className="booking-details__form-section-wrapper-item">
                                <div className="booking-details__form-section-inner">
                                    <div className="booking-details__form-section-inner-date">
                                        <span className="booking-details__form-section-inner-date-item">
                                            {moment(booking.dateTo)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </span>
                                        <span className="booking-details__form-section-inner-date-item">
                                            {moment(booking.dateTo).format('D')}
                                        </span>
                                    </div>
                                </div>
                                <div className="booking-details__form-section-inner">
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
                    <div className="booking-details__form-section">
                        <div className="booking-details__form-section-wrapper">
                            <span className="booking-details__form-section-summary">Final guests count: </span>
                            <Field component={CounterInput} name="guests" maxValue={booking.room.capacity} />
                        </div>
                    </div>
                    <div className="booking-details__form-section">
                        <div>
                            <span className="booking-details__form-section-summary">Services price list per 24h: </span>
                        </div>
                        <FieldArray
                            name="paidFacilities"
                            component={this.renderPaidFacilities}
                            className="booking-details__form-section-wrapper"
                        />
                    </div>
                    {freeFacilities.length > 0 && (
                        <div className="booking-details__form-section">
                            <span className="booking-details__form-section-summary">
                                Free facilities are always available
                            </span>
                            <div className="booking-details__form-section-free-facilities">
                                {freeFacilities.map(freeFacility => (
                                    <span
                                        key={freeFacility.id}
                                        className="booking-details__form-section-free-facilities-item"
                                    >
                                        {freeFacility.facility.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="booking-details__form-section">
                        <span className="booking-details__form-section-summary">Total price: ${totalPrice}</span>
                    </div>
                    <Button className="booking-details__form-button-submit" color="secondary">
                        Apply
                    </Button>
                </Form>
            </div>
        );
    }
}

export default BookingDetails;
