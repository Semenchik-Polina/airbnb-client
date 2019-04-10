import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import Button from '../../../shared/components/button/button';

import './payload-tab.scss';

class PayloadTab extends PureComponent {
    static propTypes = {
        details: PropTypes.shape({
            paidFacilities: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                count: PropTypes.number,
            })),
            arrivalTime: PropTypes.string.isRequired,
            departureTime: PropTypes.string.isRequired,
            guests: PropTypes.number.isRequired,
        }).isRequired,
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
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
                    services: PropTypes.arrayOf(
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
                    ),
                }),
            }).isRequired,
            totalPrice: PropTypes.number,
            dateFrom: PropTypes.instanceOf(Date),
            dateTo: PropTypes.instanceOf(Date),
        }).isRequired,
        makeFinalBooking: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.makeFinalBooking(this.props.booking, this.props.details);
    };

    render() {
        const { booking } = this.props;

        const timeUnit = moment(booking.dateTo).diff(moment(booking.dateFrom), 'd');
        const roomPrice = booking.room.cost;
        const detailsPrice = _.sumBy(this.props.details.paidFacilities, (facility) => {
            const { price } = _.find(booking.room.hotel.services, { id: facility.id });
            return facility.count ? facility.count * price : price;
        });

        const totalPrice = (detailsPrice + roomPrice) * timeUnit;

        return (
            <div className="payload-tab details-tab">
                <span className="payload-tab__header">Payload</span>
                <span className="payload-tab__summary">Total price: {totalPrice}</span>
                <div className="photo-form__buttons-container">
                    <Button
                        className="photo-form__buttons-container-item"
                        handleClick={this.handleClick}
                        color="secondary"
                    >
                        Book
                    </Button>
                </div>
            </div>
        );
    }
}

export default PayloadTab;
