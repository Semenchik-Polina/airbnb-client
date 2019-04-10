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

import * as constants from '../../constants/index';

import './details-tab.scss';

class DetailsTab extends PureComponent {
    static defaultProps = {
        formValues: null,
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        addBookingDetails: PropTypes.func.isRequired,
        formValues: PropTypes.shape({}),
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

    handleSubmit = (values) => {
        this.props.addBookingDetails(values, this.props.booking.id);
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

        return (
            <div className="details-tab">
                <div className="details-tab__header">Booking details</div>
                <Form className="details-tab__form" onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="details-tab__form-section">
                        <span className="details-tab__form-section-header">
                            {dateLabel} in {booking.room.hotel.city} — ${booking.room.cost} per night
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
                        <div>
                            <span className="details-tab__form-section-summary">Services price list per 24h: </span>
                        </div>
                        <FieldArray
                            name="paidFacilities"
                            component={this.renderPaidFacilities}
                            className="details-tab__form-section-wrapper"
                        />
                    </div>
                    {freeFacilities.length > 0 && (
                        <div className="details-tab__form-section">
                            <span className="details-tab__form-section-summary">Free facilities always available </span>
                            <div className="details-tab__form-section-free-facilities">
                                {freeFacilities.map(freeFacility => (
                                    <span
                                        key={freeFacility.id}
                                        className="details-tab__form-section-free-facilities-item"
                                    >
                                        {freeFacility.facility.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <Button className="details-tab__form-button-submit" color="secondary">
                        Apply
                    </Button>
                </Form>
            </div>
        );
    }
}

export default DetailsTab;
